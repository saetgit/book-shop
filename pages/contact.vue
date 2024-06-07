<!-- pages/contact.vue -->

<template>
  <div class="mx-8 mt-8 pt-8 min-h-screen">
    <h1 class="text-3xl font-bold mb-4 text-[#6d5532]">تماس با ما</h1>
    <p class="text-[#777]">
      اگر سوالی دارید یا به کمکی نیاز دارید، با ما تماس بگیرید. ما همیشه در خدمت شما
      هستیم.
    </p>

    <!-- فرم تماس با ما -->
    <div class="mt-8 w-[700px]">
      <!-- در اینجا می‌توانید یک فرم تماس با ما اضافه کنید -->
      <!-- مثال: -->
      <form>
        <label class="block text-sm font-medium text-gray-700">نام</label>
        <input type="text" class="mt-1 p-2 w-full border rounded-md" />

        <label class="block mt-4 text-sm font-medium text-gray-700">ایمیل</label>
        <input type="email" class="mt-1 p-2 w-full border rounded-md" />

        <label class="block mt-4 text-sm font-medium text-gray-700">پیام</label>
        <textarea class="mt-1 p-2 w-full border rounded-md"></textarea>

        <button type="submit" class="mt-4 bg-[#daa556] text-white p-2 rounded-md">
          ارسال پیام
        </button>
      </form>
    </div>
  </div>
  <div><SectionLogo /></div>
</template>

<script setup>
// اگر نیاز به افزودن لاگیک یا داده‌های دیگر دارید، می‌توانید در این قسمت اضافه کنید.
</script>
