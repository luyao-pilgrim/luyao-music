import React, { forwardRef, useState, useEffect, useRef, useImperativeHandle, useMemo } from "react"
import PropTypes from "prop-types"
import BScroll from "@better-scroll/core"
import styles from "./styles.module.scss";
import LoadingV1 from "../LoadingV1";
import LoadingV2 from "../LoadingV2";
import { debounce } from "../../utils";

const Scroll = forwardRef((props, ref) => {
  const [bScroll, setBScroll] = useState();

  const scrollContaninerRef = useRef();

  const { direction, click, refresh, bounceTop, bounceBottom } = props;

  const { pullUp, pullDown, onScroll, pullUpLoading, pullDownLoading } = props;

  let pullUpDebounce = useMemo(() => {
    return debounce(pullUp, 500)
  }, [pullUp]);

  let pullDownDebounce = useMemo(() => {
    return debounce(pullDown, 500)
  }, [pullDown]);

  useEffect(() => {
    const scroll = new BScroll(scrollContaninerRef.current, {
      scrollX: direction === "horizental",
      scrollY: direction === "vertical",
      probeType: 3,
      click: click,
      bounce: {
        top: bounceTop,
        bottom: bounceBottom
      }
    });
    setBScroll(scroll);
    return () => {
      setBScroll(null);
      scroll.destroy();
    }
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!bScroll || !onScroll) return;
    bScroll.on('scroll', (scroll) => {
      onScroll(scroll);
    })
    return () => {
      bScroll.off('scroll');
    }
  }, [onScroll, bScroll]);

  useEffect(() => {
    if (!bScroll || !pullUp) return;
    const handlePullUp = () => {
      //判断是否滑动到了底部
      if (bScroll.y <= bScroll.maxScrollY + 100) {
        pullUpDebounce();
      }
    };
    bScroll.on('scrollEnd', handlePullUp);
    return () => {
      bScroll.off('scrollEnd', handlePullUp);
    }
  }, [pullUp, pullUpDebounce, bScroll]);

  useEffect(() => {
    if (!bScroll || !pullDown) return;
    const handlePullDown = (pos) => {
      //判断用户的下拉动作
      if (pos.y > 50) {
        pullDownDebounce();
      }
    };
    bScroll.on('touchEnd', handlePullDown);
    return () => {
      bScroll.off('touchEnd', handlePullDown);
    }
  }, [pullDown, pullDownDebounce, bScroll]);


  useEffect(() => {
    if (refresh && bScroll) {
      bScroll.refresh();
    }
  });

  useImperativeHandle(ref, () => ({
    refresh() {
      if (bScroll) {
        bScroll.refresh();
        bScroll.scrollTo(0, 0);
      }
    },
    getBScroll() {
      if (bScroll) {
        return bScroll;
      }
    }
  }));

  return (
    <div className={styles.scrollWrapper} ref={scrollContaninerRef}>
      <div>
        {props.children}
        {pullUpLoading ? <div className={styles.pullUpLoadingWrapper}>
          <LoadingV1></LoadingV1>
        </div> : null}
        {pullDownLoading ? <div className={styles.pullDownLoadingWrapper}>
          <LoadingV2></LoadingV2>
        </div> : null}
      </div>
    </div>
  );
})

Scroll.defaultProps = {
  direction: "vertical",
  click: true,
  refresh: true,
  onScroll: null,
  pullUpLoading: false,
  pullDownLoading: false,
  pullUp: null,
  pullDown: null,
  bounceTop: true,
  bounceBottom: true
};

Scroll.propTypes = {
  direction: PropTypes.oneOf(['vertical', 'horizental']),
  refresh: PropTypes.bool,
  onScroll: PropTypes.func,
  pullUp: PropTypes.func,
  pullDown: PropTypes.func,
  pullUpLoading: PropTypes.bool,
  pullDownLoading: PropTypes.bool,
  bounceTop: PropTypes.bool,// 是否支持向上吸顶
  bounceBottom: PropTypes.bool// 是否支持向上吸顶
};

export default Scroll;