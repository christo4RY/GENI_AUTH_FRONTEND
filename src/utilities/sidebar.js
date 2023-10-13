export const sidebarToggle = (e) => {
  const sidebar = e.target.closest(".sidebar");

  const content = sidebar
    .closest(".main-layout")
    .querySelector(".right-content");
  if (
    sidebar.classList.contains(
      "w-0" || "md:w-[22%]" || "lg:w-[18%]" || "xl:w-[16%]"
    )
  ) {
    sidebar.classList.remove("w-0", "md:w-[22%]", "lg:w-[18%]", "xl:w-[16%]");
    sidebar.classList.add("md:w-[9%]", "lg:w-[7.2%]", "xl:w-[6%]");
    content.classList.remove(
      "ps-2",
      "md:ps-[14rem]",
      "lg:ps-[13rem]",
      "xl:ps-[14rem]"
    );
    content.classList.add("ps-0", "md:ps-24", "lg:ps-24", "xl:ps-24");
  } else {
    sidebar.classList.remove("md:w-[9%]", "lg:w-[7.2%]", "xl:w-[6%]");
    sidebar.classList.add("w-0", "md:w-[22%]", "lg:w-[18%]", "xl:w-[16%]");
    content.classList.remove("ps-0", "md:ps-24", "lg:ps-24", "xl:ps-24");
    content.classList.add(
      "ps-2",
      "md:ps-[14rem]",
      "lg:ps-[13rem]",
      "xl:ps-[14rem]"
    );
  }
  sidebar
    .querySelector(".sidebar-brand")
    .classList.toggle("sidebar-brand-close");
  sidebar.querySelector(".sidebar-submenu-link").classList.toggle("hidden");

  const items = sidebar.querySelectorAll(".sidebar-link .sidebar-link-item ");
  items.forEach((item) => {
    item.querySelector("h5").classList.toggle("sidebar-brand-close");
    item.querySelector(".sidebar-link-icon").classList.toggle("text-[1.6rem]");
  });
  const icons = sidebar.querySelectorAll(
    ".sidebar-link .sidebar-link-item-icon "
  );
  icons.forEach((icon) => {
    icon.classList.toggle("hidden");
  });

  sidebar
    .querySelector(".close-sidebar")
    .classList.toggle("sidebar-link-item-icon-open");
};

export const showSubMenu = (e) => {
  const main = e.target.closest(".sidebar");
  const target = e.target.closest(".sidebar-link");
  if (main.classList.contains("md:w-[9%]" || "lg:w-[7.2%]" || "xl:w-[6%]")) {
    // const subs = main.querySelectorAll(".sidebar-link");
    // subs.forEach((sub) => {
    //   console.log(window.getComputedStyle(sub));
    //   //   sub.querySelector(".sidebar-submenu-link").classList.contains("block") &&
    //   //   sub.querySelector(".sidebar-submenu-link").classList.add("hidden");
    // });
    // console.log(target.querySelector(".sidebar-submenu-link"));
    // target
    //   .querySelector(".sidebar-submenu-link")
    //   .classList.toggle("show-submenu-hover");
    // target.querySelector(".sidebar-submenu-link").classList.remove("hidden");
  } else {
    target
      .querySelector(".sidebar-submenu-link")
      .classList.toggle("show-submenu");

    target
      .querySelector(".sidebar-link-item-icon")
      .classList.toggle("sidebar-link-item-icon-open");
  }
};
