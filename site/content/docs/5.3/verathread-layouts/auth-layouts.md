---
layout: docs
title: Verathread Auth Layouts
description: This document offers developers a detailed guide on designing authentication pages, including login, logged out, and initial account setup pages. Key elements for these pages include clear instructions and success and progress indicators. Best practices highlighted in the document include maintaining a consistent design and ensuring accessibility. Example authentication pages are provided through-out this document.
group: components
toc: true
---

## How it works

Here's what you need to know before getting started with the Auth. pages:

- Authorization is provided by Auth0, these are validated through the backend

## Auth Page Structure

<!-- markdownlint-disable MD033 -->
{{< example >}}
<!--begin::Authentication -->
<div class="d-flex flex-column flex-column-fluid flex-lg-row page-bg-brand">
  <!--begin::Aside-->
  <div class="d-flex flex-center w-lg-50 pt-15 pt-lg-0 px-10">
    <!--begin::Aside-->
    <div class="d-flex flex-center flex-lg-start flex-column">
      <!--begin::Logo-->
      <a href="#" class="mb-7">
        <img src="/docs/5.3/assets/logos/logo.png" alt="Verathread" width="300" loading="lazy">
      </a>
      <!--end::Logo-->
    </div>
    <!--begin::Aside-->
  </div>
  <!--begin::Aside-->
  <!--begin::Body-->
  <div class="d-flex flex-column-fluid flex-lg-row-auto justify-content-lg-end p-5 p-lg-10">
    <!--begin::Card-->
    <div class="bg-body d-flex flex-column align-items-stretch rounded-4 w-md-400px p-10">
      <!--begin::Wrapper-->
      <div class="d-flex flex-column flex-column-fluid px-lg-10 pb-15 pb-lg-20">
        <!--begin::Form-->
        <form class="w-100 form" novalidate="novalidate" id="form" action="#">
          <!--begin::Heading-->
          <div class="mb-11">
            <!--begin::Title-->
            <h1 class="text-gray-900 fw-bolder mb-3">
              <i class="fa-duotone fa-solid fa-right-to-bracket pe-1"></i>
              Title
            </h1>
            <!--end::Title-->
            <!--begin::Subtitle-->
            <div class="text-gray-500 fw-semibold fs-6">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </div>
            <!--end::Subtitle=-->
          </div>
          <!--begin::Heading-->
          <!--begin::Submit button-->
          <div class="d-grid mb-10">
            <button type="submit" id="kt_sign_in_submit" class="btn btn-primary">
              <!--begin::Indicator label-->
              <span class="indicator-label">Action</span>
              <!--end::Indicator label-->
              <!--begin::Indicator progress-->
              <span class="indicator-progress">Please wait... 
              <span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
              <!--end::Indicator progress-->
            </button>
          </div>
          <!--end::Submit button-->
        </form>
        <!--end::Form-->
      </div>
      <!--end::Wrapper-->
      <!--begin::Footer-->
      <div class="d-flex flex-stack px-lg-10">
        <!--begin::Links-->
        <div class="d-flex fw-semibold text-primary fs-base gap-5">
          <a href="#" target="_blank">Terms</a>
          <a href="#" target="_blank">Contact Us</a>
        </div>
        <!--end::Links-->
      </div>
      <!--end::Footer-->
    </div>
    <!--end::Card-->
  </div>
  <!--end::Body-->
</div>
<!--begin::Authentication -->
{{< /example >}}
<!-- markdownlint-enable MD033 -->

## Error example

If there is an error this will provide feedback on the error.

<!-- markdownlint-disable MD033 -->
{{< example >}}
<!--begin::Authentication -->
<div class="d-flex flex-column flex-column-fluid flex-lg-row page-bg-brand">
  <!--begin::Aside-->
  <div class="d-flex flex-center w-lg-50 pt-15 pt-lg-0 px-10">
    <!--begin::Aside-->
    <div class="d-flex flex-center flex-lg-start flex-column">
      <!--begin::Logo-->
      <a href="#" class="mb-7">
        <img src="/docs/5.3/assets/logos/logo.png" alt="Verathread" width="300" loading="lazy">
      </a>
      <!--end::Logo-->
    </div>
    <!--begin::Aside-->
  </div>
  <!--begin::Aside-->
  <!--begin::Body-->
  <div class="d-flex flex-column-fluid flex-lg-row-auto justify-content-lg-end p-5 p-lg-10">
    <!--begin::Card-->
    <div class="bg-body d-flex flex-column align-items-stretch rounded-4 w-md-400px p-10">
      <!--begin::Wrapper-->
      <div class="d-flex flex-column flex-column-fluid px-lg-10 pb-15 pb-lg-20">
        <!--begin::Form-->
        <form class="w-100 form" novalidate="novalidate" id="form" action="#">
          <!--begin::Heading-->
          <div class="mb-11">
            <!--begin::Title-->
            <div class="text-gray-900 d-flex justify-content-center pb-5">
              <i class="fa-duotone fa-solid fa-bug fa-9x text-danger"></i>
            </div>
            <!--end::Title-->
            <!--begin::Subtitle-->
            <div class="text-danger fw-semibold fs-6 text-center">
              Some quick example text to explain the error and what the user can do next.
            </div>
            <!--end::Subtitle=-->
          </div>
          <!--begin::Heading-->
          <!--begin::Submit button-->
          <div class="d-grid mb-10">
            <button type="submit" id="kt_sign_in_submit" class="btn btn-primary">
              <!--begin::Indicator label-->
              <span class="indicator-label">Action</span>
              <!--end::Indicator label-->
              <!--begin::Indicator progress-->
              <span class="indicator-progress">Please wait... 
                <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
              </span>
              <!--end::Indicator progress-->
            </button>
          </div>
          <!--end::Submit button-->
        </form>
        <!--end::Form-->
      </div>
      <!--end::Wrapper-->
      <!--begin::Footer-->
      <div class="d-flex flex-stack px-lg-10">
        <!--begin::Links-->
        <div class="d-flex fw-semibold text-primary fs-base gap-5">
          <a href="#" target="_blank">Terms</a>
          <a href="#" target="_blank">Contact Us</a>
        </div>
        <!--end::Links-->
      </div>
      <!--end::Footer-->
    </div>
    <!--end::Card-->
  </div>
  <!--end::Body-->
</div>
<!--begin::Authentication -->
{{< /example >}}
<!-- markdownlint-enable MD033 -->
