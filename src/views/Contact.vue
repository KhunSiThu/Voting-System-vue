<template>

<div v-if="userData">
  <SideBar :userData="userData"></SideBar>


  <div class="sm:ml-64 bg-gray-100 text-gray-900 rounded-lg dark:bg-gray-900 dark:text-gray-200">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 p-5 md:p-32">
      <!-- Contact Information -->
      <div class="space-y-6">
        <h2 class="text-2xl font-bold text-blue-500 dark:text-blue-400">Our Contact Details</h2>
        <p>
          If you have any questions, feel free to reach out using the details below.
        </p>
        <ul class="space-y-4 text-gray-700 dark:text-gray-300">
          <li>
            <strong>Address:</strong> Technological University (Yamethin)
          </li>
          <li><strong>Phone:</strong> +95 123 456 789</li>
          <li>
            <strong>Email:</strong>
            <a href="mailto:info@tu.edu.mm" class="text-blue-500 hover:underline dark:text-blue-400">info@tu.edu.mm</a>
          </li>
        </ul>
        <div class="flex space-x-4">
          <a href="#" class="hover:text-blue-700 dark:hover:text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500 dark:text-blue-300" fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M22.46 6.01c-.77.35-1.6.58-2.47.69.88-.52 1.56-1.34 1.88-2.31-.83.49-1.74.84-2.71 1.03a4.48 4.48 0 0 0-7.62 4.08A12.72 12.72 0 0 1 2.22 4.69a4.5 4.5 0 0 0-.61 2.25 4.47 4.47 0 0 0 1.99 3.72 4.46 4.46 0 0 1-2.03-.56v.06a4.48 4.48 0 0 0 3.59 4.4 4.45 4.45 0 0 1-1.18.15 4.55 4.55 0 0 1-.84-.08 4.48 4.48 0 0 0 4.19 3.12 9.02 9.02 0 0 1-5.59 1.93c-.36 0-.72-.02-1.07-.06a12.71 12.71 0 0 0 6.88 2.02c8.27 0 12.8-6.86 12.8-12.8 0-.2 0-.4-.01-.59a9.13 9.13 0 0 0 2.23-2.33z">
              </path>
            </svg>
          </a>
          <a href="#" class="hover:text-blue-700 dark:hover:text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500 dark:text-blue-300" fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M19.63 3.63H4.37A1.74 1.74 0 0 0 2.63 5.37v14.26a1.74 1.74 0 0 0 1.74 1.74h15.26a1.74 1.74 0 0 0 1.74-1.74V5.37a1.74 1.74 0 0 0-1.74-1.74zM12 7.95a4.05 4.05 0 1 1 0 8.1 4.05 4.05 0 0 1 0-8.1zm5.35-.72a.91.91 0 1 1 0 1.83.91.91 0 0 1 0-1.83zM12 15.6a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2zm5.4-8.4a1.2 1.2 0 1 1-1.2-1.2 1.2 1.2 0 0 1 1.2 1.2z">
              </path>
            </svg>
          </a>
        </div>
      </div>

      <!-- Contact Form -->
      <div>
        <h2 class="text-2xl font-bold text-blue-500 dark:text-blue-400">Send Us a Message</h2>
        <form action="" method="POST" class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Your Name</label>
            <input type="text" id="name" name="name"
              class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
              placeholder="Enter your name" required />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Your Email</label>
            <input type="email" id="email" name="email"
              class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
              placeholder="Enter your email" required />
          </div>
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
            <textarea id="message" name="message" rows="4"
              class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
              placeholder="Write your message here..." required></textarea>
          </div>
          <button type="submit"
            class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-500">
            Send Message
          </button>
        </form>
      </div>
    </div>

    <!-- Services Section -->
    <section class="bg-white py-12 mt-10 dark:bg-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-2xl font-bold text-blue-500 mb-6 text-center dark:text-blue-400">Our Services</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div class="bg-gray-100 p-6 rounded-lg shadow dark:bg-gray-700">
            <h3 class="font-semibold text-lg text-blue-600 mb-2 dark:text-blue-400">Academic Support</h3>
            <p class="text-gray-700 prose text-justify dark:text-gray-300">
              We provide guidance and resources to help students achieve their academic goals.
            </p>
          </div>
          <div class="bg-gray-100 p-6 rounded-lg shadow dark:bg-gray-700">
            <h3 class="font-semibold text-lg text-blue-600 mb-2 dark:text-blue-400">Partnerships</h3>
            <p class="text-gray-700 prose text-justify dark:text-gray-300">
              We collaborate with industry leaders to drive innovation and research.
            </p>
          </div>
          <div class="bg-gray-100 p-6 rounded-lg shadow dark:bg-gray-700">
            <h3 class="font-semibold text-lg text-blue-600 mb-2 dark:text-blue-400">Community Outreach</h3>
            <p class="text-gray-700 prose text-justify dark:text-gray-300">
              Our programs aim to impact the community through education and technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>

</template>

<script>

import SideBar from '@/components/SideBar.vue';

export default {

  components: {
    SideBar
  },

  setup() {
    let userId = localStorage.getItem("userId");

        let userData = JSON.parse(localStorage.getItem("userData"));

        return {userData}
  }

}
</script>

<style></style>