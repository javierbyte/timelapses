const Sequencer = window.Sequencer;

const SRC = {
  mgyon: {
    width: 720,
    height: 1080,
    initialFrame: 6590,
    initialHour: 17,
    initialMinute: 16,

    finalFrame: 7009,
    finalHour: 17,
    finalMinute: 23,
    list: generateList(`public/mgyonp/DSCF`, 6591, 7009, [7000, 6764, 6825, 6732]).filter((e, eIdx) => {
      if (e.photoId < 6590 + 25) return true;
      if (e.photoId > 7009 - 25) return eIdx % 2 === 0;
      return eIdx % 3 === 0;
    })
  },
  thunder: {
    width: 720,
    height: 1080,
    initialFrame: 1887,
    initialHour: 21,
    initialMinute: 0,

    finalFrame: 2439,
    finalHour: 21,
    finalMinute: 55,
    list: generateList(`public/thunderp/DSCF`, 1888, 2339, []).filter((e, eIdx) => {
      if (eIdx < 25) return true;
      if (e.photoId > 2339 - 30 && eIdx < 190) return true;
      // return eIdx % 3 === 0 || eIdx % 3 === 1;
      return eIdx % 2 === 1;
    })
  },
  drone: {
    width: 1080,
    height: 720,
    initialFrame: 8274,
    initialHour: 17,
    initialMinute: 47,

    finalFrame: 8564,
    finalHour: 17,
    finalMinute: 52,
    list: generateList(`public/dronep/DSCF`, 8310, 8554, []).filter((e, eIdx) => {
      // if (eIdx > 100 || eIdx < 10) return true;

      if (e.photoId < 8320) return true;
      if (e.photoId > 8418 && e.photoId < 8425) return true;
      if (e.photoId > 8510) return true;

      return eIdx % 2 === 0;
    })
  },
  expi: {
    width: 720,
    height: 1080,
    initialFrame: 2182,
    initialHour: 1,
    initialMinute: 10,

    finalFrame: 2290,
    finalHour: 1,
    finalMinute: 13,
    list: [
      {
        photoId: 2182,
        path: 'public/exp/DSCF2182.jpg'
      },
      {
        photoId: 2185,
        path: 'public/exp/DSCF2185.jpg'
      },
      {
        photoId: 2188,
        path: 'public/exp/DSCF2188.jpg'
      },
      {
        photoId: 2191,
        path: 'public/exp/DSCF2191.jpg'
      },
      {
        photoId: 2194,
        path: 'public/exp/DSCF2194.jpg'
      },
      {
        photoId: 2197,
        path: 'public/exp/DSCF2197.jpg'
      },
      {
        photoId: 2200,
        path: 'public/exp/DSCF2200.jpg'
      },
      {
        photoId: 2203,
        path: 'public/exp/DSCF2203.jpg'
      },
      {
        photoId: 2206,
        path: 'public/exp/DSCF2206.jpg'
      },
      {
        photoId: 2209,
        path: 'public/exp/DSCF2209.jpg'
      },
      {
        photoId: 2212,
        path: 'public/exp/DSCF2212.jpg'
      },
      {
        photoId: 2215,
        path: 'public/exp/DSCF2215.jpg'
      },
      {
        photoId: 2218,
        path: 'public/exp/DSCF2218.jpg'
      },
      {
        photoId: 2221,
        path: 'public/exp/DSCF2221.jpg'
      },
      {
        photoId: 2224,
        path: 'public/exp/DSCF2224.jpg'
      },
      {
        photoId: 2227,
        path: 'public/exp/DSCF2227.jpg'
      },
      {
        photoId: 2230,
        path: 'public/exp/DSCF2230.jpg'
      },
      {
        photoId: 2233,
        path: 'public/exp/DSCF2233.jpg'
      },
      {
        photoId: 2236,
        path: 'public/exp/DSCF2236.jpg'
      },
      {
        photoId: 2239,
        path: 'public/exp/DSCF2239.jpg'
      },
      {
        photoId: 2242,
        path: 'public/exp/DSCF2242.jpg'
      },
      {
        photoId: 2245,
        path: 'public/exp/DSCF2245.jpg'
      },
      {
        photoId: 2248,
        path: 'public/exp/DSCF2248.jpg'
      },
      {
        photoId: 2251,
        path: 'public/exp/DSCF2251.jpg'
      },
      {
        photoId: 2254,
        path: 'public/exp/DSCF2254.jpg'
      },
      {
        photoId: 2257,
        path: 'public/exp/DSCF2257.jpg'
      },
      {
        photoId: 2260,
        path: 'public/exp/DSCF2260.jpg'
      },
      {
        photoId: 2263,
        path: 'public/exp/DSCF2263.jpg'
      },
      {
        photoId: 2266,
        path: 'public/exp/DSCF2266.jpg'
      },
      {
        photoId: 2269,
        path: 'public/exp/DSCF2269.jpg'
      },
      {
        photoId: 2272,
        path: 'public/exp/DSCF2272.jpg'
      },
      {
        photoId: 2275,
        path: 'public/exp/DSCF2275.jpg'
      },
      {
        photoId: 2278,
        path: 'public/exp/DSCF2278.jpg'
      },
      {
        photoId: 2281,
        path: 'public/exp/DSCF2281.jpg'
      },
      {
        photoId: 2284,
        path: 'public/exp/DSCF2284.jpg'
      },
      {
        photoId: 2287,
        path: 'public/exp/DSCF2287.jpg'
      },
      {
        photoId: 2290,
        path: 'public/exp/DSCF2290.jpg'
      }
    ]
  }
};

const preloadList = [];
for (const galleryKey in SRC) {
  SRC[galleryKey].pathList = SRC[galleryKey].list.map((e) => e.path);
  preloadList.push(SRC[galleryKey].pathList[0]);
}

new Preloader(
  [],
  preloadList,
  () => {},
  () => {}
);

const GALLERY = [
  ...['thunder', 'expi', 'mgyon'].sort(() => {
    return Math.random() - 0.33;
  }),
  'drone'
];

window.INSTANCES = {};
window.CURRENT_INSTANCE = GALLERY[0];

function generateList(path, start, end, exceptions) {
  return new Array(end - start)
    .fill('')
    .map((el, elIdx) => {
      if (exceptions.includes(start + elIdx)) return null;
      return {
        path: `/timelapses/${path}${start + elIdx}.jpg`,
        photoId: start + elIdx
      };
    })
    .filter((e) => !!e);
}

function parseTime(frameTime) {
  const hour = `0${Math.floor(frameTime / 60 / 60) % 24}`.slice(-2);
  const minute = `0${Math.floor(frameTime / 60) % 60}`.slice(-2);
  const second = `0${Math.floor(frameTime % 60)}`.slice(-2);
  const deciSecond = `00${Math.floor((frameTime % 1) * 100)}`.slice(-2);

  return `${hour}:${minute}:${second}.${deciSecond}`;
}

function getTime({ id, list, initialFrame, finalFrame, initialHour, initialMinute, finalHour, finalMinute }) {
  const initialTime = (initialHour * 60 + initialMinute) * 60;
  const finalTime = (finalHour * 60 + finalMinute) * 60;
  const currentPhotoId = list[id].photoId;
  const interPhotoTime = (finalTime - initialTime) / (finalFrame - initialFrame);
  const frameTime = (currentPhotoId - initialFrame) * interPhotoTime + initialTime;
  return parseTime(frameTime);
}

window.currentSlide = 0;

function createNewSlideInstance(timelapseName) {
  // window.TIME = new Date().getTime();

  const infoEl = document.querySelector(`.swiper-slide.-${timelapseName} .info`);
  const infoElNumber = document.querySelector(`.swiper-slide.-${timelapseName} .info.-number`);

  const options = {
    direction: 'x',
    scaleMode: 'contain',
    showLoadedImages: true,
    playMode: 'hover',
    originalHeight: SRC[timelapseName].height,
    originalWidth: SRC[timelapseName].width,
    sequenceName: timelapseName,
    imageLoad: function (e) {
      if (e.count >= e.total) {
        infoEl.innerHTML = hasTouch ? '← Scroll →' : '← Hover →';
      } else {
        infoEl.innerHTML = `Loading... ${Number((e.count / e.total) * 100).toFixed(0)}%`;
      }

      document.querySelector(`.swiper-slide.-${timelapseName} canvas`).style.opacity = 1;

      // document.querySelector(`.swiper-slide.-${timelapseName} canvas`).style.transform = `translatex(${
      //   (e.count / (SRC[timelapseName].pathList.length - 1)) * 16 - 8
      // }px)`;
    },

    onSelect: function (current) {
      infoEl.style.display = 'none';
      infoElNumber.innerHTML = getTime({ id: current, ...SRC[timelapseName] });

      // window.setTimeout(() => {alert("ah")}, 1000)

      // window.test = window.test || [];
      // const time = new Date().getTime();
      // window.test.push(time);
      // window.test = window.test.filter((date) => date > time - 1000);
      // document.title = window.test.length;

      document.querySelector(`.swiper-slide.-${timelapseName} .canvas-shadow`).style.transform = `translatex(${
        -100 + (current / (SRC[timelapseName].pathList.length - 1)) * 100
      }vw)`;

      document.querySelector(`.swiper-slide.-${timelapseName} canvas`).style.transform = `translatex(${
        (current / (SRC[timelapseName].pathList.length - 1)) * 18 - 9
      }px)`;
    }
  };

  const newSequence = Sequencer.make({
    ...options,
    list: SRC[timelapseName].pathList,
    canvas: document.querySelector(`.swiper-slide.-${timelapseName} canvas`)
  });

  window.requestAnimationFrame(() => {
    newSequence.size();
  });

  window.INSTANCES[timelapseName] = newSequence;
}

function setCurrentSlide(newSlide) {
  // console.log('Change Slide', newSlide);

  if (!window.INSTANCES[GALLERY[newSlide]]) {
    // console.info(`Create new Slider instance "${GALLERY[newSlide]}"`);
    createNewSlideInstance(GALLERY[newSlide]);
  }

  // add -active class
  document.querySelectorAll(`.swiper-slide.-active`).forEach((e) => e.classList.remove('-active'));
  document.querySelector(`.swiper-slide.-${GALLERY[newSlide]}`).classList.add('-active');

  // is the last slide
  if (newSlide === GALLERY.length - 1) {
    document.querySelector('.js-more-slides').style.display = 'none';
    document.querySelector('.js-no-more-slides').style.display = 'flex';
  } else {
    document.querySelector('.js-more-slides').style.display = 'flex';
    document.querySelector('.js-no-more-slides').style.display = 'none';
  }

  window.setTimeout(globalResize, 8);
}

window.loadedSlide = 0;
function setLoadedSlide(newSlide) {
  window.loadedSlide = newSlide;
}

const swiperEl = document.querySelector('.swiper-wrapper');

// MAIN

for (const timelapseName of GALLERY) {
  const slide = document.createElement('BUTTON');
  slide.id = timelapseName;
  slide.className = `swiper-slide -${timelapseName}`;
  slide.innerHTML = `
  <div class="canvas-shadow"></div>

  <div class="canvas-container">
    <div class="canvas-wrapper">
      <canvas class="canvas"></canvas>
    </div>
    <div class="info"></div>
    <div class="info -number"></div>
  </div>
  `;

  swiperEl.appendChild(slide);
}

function globalResize() {
  document.querySelectorAll('.swiper-slide').forEach((e) => {
    e.style.height = `${window.innerHeight}px`;
  });
  document.querySelectorAll('.swiper-container').forEach((e) => {
    e.style.height = `${window.innerHeight}px`;
  });

  for (const galleryName in window.INSTANCES) {
    window.INSTANCES[galleryName].size();
  }

  const currentCanvas = document.querySelector(`.swiper-slide.-${window.CURRENT_INSTANCE} .canvas-wrapper`);
  if (currentCanvas) {
    const { width, height } = currentCanvas.getBoundingClientRect();

    document.querySelectorAll(`.-note-top`).forEach((e) => {
      e.style.height = `${Math.round((window.innerHeight - height) / 2 - window.PADDING_TOP_DIFF + 2)}px`;
    });
    document.querySelectorAll(`.-note-bottom`).forEach((e) => {
      e.style.height = `${Math.round((window.innerHeight - height) / 2 + window.PADDING_TOP_DIFF * 1.5)}px`;
    });
  }
}

window.setTimeout(() => {
  const mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    mousewheel: true
  });

  document.body.classList.add(`-${GALLERY[mySwiper.activeIndex]}`);
  mySwiper.on('slideChange', function () {
    for (const currentClass of document.body.classList) {
      if (currentClass.includes('-')) {
        document.body.classList.remove(currentClass);
      }
    }

    document.body.classList.add(`-${GALLERY[mySwiper.activeIndex]}`);
    setCurrentSlide(mySwiper.activeIndex);
    window.CURRENT_INSTANCE = GALLERY[mySwiper.activeIndex];
    window.setTimeout(globalResize, 8);
  });
  setCurrentSlide(0);

  globalResize();
}, 8);

globalResize();
window.addEventListener('resize', globalResize);
