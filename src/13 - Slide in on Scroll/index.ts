import { throttle } from 'lodash'

/* elements */
const images: NodeListOf<HTMLImageElement> = document.querySelectorAll(
  `.slide-in`
)
console.log(images)

/* handlers */
const handleScroll = throttle((): void => {
  images.forEach(
    (image: HTMLImageElement): void => {
      /*
       * offsetTop: absolute distance from top of window
       * scrollY: `offsetTop` of top of window after factoring in scroll distance
       * innerHeight: height of window
       * scrollY + innerHeight: scrollY w.r.t. bottom of window
       * imgHalf: position of bottom of window - half of image height
       */
      const imgHalf: number =
        window.scrollY + window.innerHeight - image.height / 2
      const imgBottom: number = image.offsetTop + image.height
      console.log(imgHalf)
      const halfOfImageIsShowing: boolean = imgHalf > image.offsetTop
      const imageIsNotScrolledPast: boolean = window.scrollY < imgBottom

      if (halfOfImageIsShowing && imageIsNotScrolledPast) {
        image.classList.add(`active`)
      } else {
        image.classList.remove(`active`)
      }
    }
  )
}, 150)

/* listeners */
window.addEventListener('scroll', handleScroll)
