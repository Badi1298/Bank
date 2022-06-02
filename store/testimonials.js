import { createSlice } from '@reduxjs/toolkit';

const testimonialsSlice = createSlice({
  name: 'testimonials',
  initialState: [
    {
      id: 1,
      title: 'Best financial decision ever',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quas quisquam non? Quas voluptate nulla minima deleniti optio ullam nesciunt, numquam corporis et asperiores laboriosam sunt, praesentium suscipit blanditiis. Necessitatibus id alias reiciendis, perferendis facere pariatur dolore veniam autem esse non voluptatem saepe provident nihil molestiae.',
      name: 'Aarav Lynn',
      address: 'San Francisco, USA',
      photoURL: '/user-1.jpg',
    },
    {
      id: 2,
      title: 'The last step to becoming a complete minimalist',
      content:
        'Quisquam itaque deserunt ullam, quia ea repellendus provident, ducimus neque ipsam modi voluptatibus doloremque, corrupti laborum. Incidunt numquam perferendis veritatis neque repellendus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo deserunt exercitationem deleniti.',
      name: 'Miyah Miles',
      address: 'London, UK',
      photoURL: '/user-2.jpg',
    },
    {
      id: 3,
      title: 'Finally free from old-school banks',
      content:
        'Debitis, nihil sit minus suscipit magni aperiam vel tenetur incidunt commodi architecto numquam omnis nulla autem, necessitatibus blanditiis modi similique quidem. Odio aliquam culpa dicta beatae quod maiores ipsa minus consequatur error sunt, deleniti saepe aliquid quos inventore sequi. Necessitatibus id alias reiciendis, perferendis facere.',
      name: 'Francisco Gomes',
      address: 'Lisbon, Portugal',
      photoURL: '/user-3.jpg',
    },
  ],
  reducers: {},
});

export default testimonialsSlice.reducer;
