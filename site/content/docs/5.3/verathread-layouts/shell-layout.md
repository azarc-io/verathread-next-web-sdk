---
layout: docs
title: Verathread Shell Layouts
description: This document lays out the key elements of the Verathread shell, including a prominent logo for brand identity, a customisable navbar with dynamic menu items, a search function for easy navigation, and accessible profile settings. Additionally, the document covers the implementation of a light/dark theme switcher to accommodate user preferences, and a flexible content area for displaying app information.
group: components
toc: true
---

## How it works


Here's what you need to know before getting started with the Verathread shell:

- Auth-layouts: [Auth Layouts]({{< docsref "/verathread-layouts/auth-layouts" >}})
- Error-layouts: [Error Layouts]({{< docsref "/verathread-layouts/error-layouts" >}})

## Shell Structure

- Navbar: The layout uses the standard [Bootstrap layout]({{< docsref "/components/navbar.md" >}}), the content is dynamically added based on your subscription and your Navbar will be populated by this information.
- Content Area: 'Content to add'!
- User management: 'Content to add'!
- Footer: This is predefined and can not be altered.

Here's an example of all the sub-components included in a responsive light-themed Verathread shell that will host the various Apps you add to the content this includes a fixed height content section which is not scrollable.

<!-- markdownlint-disable MD033 -->
{{< example >}}
<!--begin::Root-->
<div class="d-flex flex-column flex-root">
  <!--begin::Page-->
  <div class="page d-flex flex-row flex-column-fluid">
    <!--begin::Wrapper-->
    <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
      <!--begin::Header-->
      <div class="header align-items-stretch">
        <!--begin::Container-->
        <div class="container-xxl d-flex align-items-center">
          <!--begin::Header Logo-->
          <div class="header-logo me-5 me-md-10 flex-grow-1 flex-lg-grow-0">
            <img alt="Logo" src="/docs/5.3/assets/logos/logo.png" class="logo-default h-50px">
          </div>
          <!--end::Header Logo-->
          <!--begin::Wrapper-->
          <div class="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
            <!--begin::Navbar-->
            <div class="d-flex align-items-stretch" id="kt_header_nav">
              <!--begin::Menu wrapper-->
              <div class="header-menu align-items-stretch">
                <!--begin::Menu-->
                <div class="
                  menu 
                  menu-rounded 
                  menu-column
                  menu-lg-row 
                  menu-active-bg
                  menu-title-gray-700 
                  menu-state-primary 
                  menu-arrow-gray-500 
                  fw-semibold 
                  my-5 my-lg-0 
                  align-items-stretch 
                  px-2 px-lg-0" 
                  id="#kt_header_menu" data-kt-menu="true">
                  <!--begin:Menu item-->
                  <div class="menu-item menu-lg-down-accordion me-0 me-lg-2">
                    <!--begin:Menu link-->
                    <span class="menu-link py-3" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <span class="menu-title">Apps</span>
                      <span class="menu-arrow d-lg-none"></span>
                    </span>
                    <!--end:Menu link-->
                    <!--begin:Menu sub-->
                    <div class="dropdown-menu menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0">
                      <!--begin:Menu item-->
                      <a class="menu-link py-3" href="#">
                        <span class="menu-title">My App</span>
                      </a>
                      <!--end:Menu item-->
                    </div>
                    <!--end:Menu sub-->
                  </div>
                  <!--end:Menu item-->
                </div>
                <!--end::Menu-->
              </div>
              <!--end::Menu wrapper-->
            </div>
            <!--end::Navbar-->
            <!--begin::Toolbar wrapper-->
            <div class="topbar d-flex align-items-stretch flex-shrink-0">
              <!--begin::Example-->
              <div class="d-flex align-items-center ms-1 ms-lg-3">
                <!--begin::Menu toggle-->
                <div href="#" class="
                  btn btn-icon btn-active-light-primary btn-custom 
                  w-30px h-30px w-md-40px h-md-40px"
                >
                  <img class="h-30px w-30px rounded" src="/docs/5.3/assets/avatars/300-2.jpg" alt="" />
                </div>
                <!--begin::Menu toggle-->
              </div>
              <!--end::Example-->
            </div>
            <!--end::Toolbar wrapper-->
          </div>
          <!--end::Wrapper-->
        </div>
        <!--end::Container-->
      </div>
      <!--end::Header-->
      <!--begin::Container-->
      <div id="kt_content_container" class="d-flex flex-column-fluid align-items-start container-xxl">
        <!--begin::Post-->
        <div class="content flex-row-fluid" id="content"> 
          <div class="example-content">
            <label>Content</label>
          </div>
        </div>
        <!--begin::Post-->
      </div>
      <!--end::Container-->
    </div>
    <!--end::Wrapper-->
  </div>
  <!--end::Page-->
</div>
<!--end::Root-->
{{< /example >}}
<!-- markdownlint-enable MD033 -->

## CSS

### Variables

As part of Verathread's evolving CSS variables approach, navbars now use local CSS variables on `.navbar` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="navbar-css-vars" file="node_modules/bootstrap/scss/_navbar.scss" >}}

Some additional CSS variables are also present on `.navbar-nav`:

{{< scss-docs name="navbar-nav-css-vars" file="node_modules/bootstrap/scss/_navbar.scss" >}}

Customization through CSS variables can be seen on the `.navbar-dark` class where we override specific values without adding duplicate CSS selectors.

{{< scss-docs name="navbar-dark-css-vars" file="node_modules/bootstrap/scss/_navbar.scss" >}}

### Sass variables

Variables for all navbars:

{{< scss-docs name="navbar-variables" file="node_modules/bootstrap/scss/_variables.scss" >}}

Variables for the [dark navbar](#color-schemes):

{{< scss-docs name="navbar-dark-variables" file="node_modules/bootstrap/scss/_variables.scss" >}}

### Sass loops

[Responsive navbar expand/collapse classes](#responsive-behaviors) (e.g., `.navbar-expand-lg`) are combined with the `$breakpoints` map and generated through a loop in `scss/_navbar.scss`.

{{< scss-docs name="navbar-expand-loop" file="node_modules/bootstrap/scss/_navbar.scss" >}}
