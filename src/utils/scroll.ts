export const scrollToSection = (
  sectionId: string,
  headerHeight: number = 96
) => {
  const element = document.querySelector(sectionId);
  if (element) {
    const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetTop = elementTop - headerHeight;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
};

export const getScrollPosition = () => {
  if (typeof window !== "undefined") {
    return window.pageYOffset || document.documentElement.scrollTop;
  }
  return 0;
};

export const isElementInViewport = (element: Element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
