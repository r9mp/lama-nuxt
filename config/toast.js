export default {
  position: 'top-center',
  register: [
    // Register custom toasts
    {
      name: 'error',
      message: 'Oops... Something went wrong!',
      options: {
        type: 'error',
      },
    },
    {
      name: 'success',
      message: 'Done... Something went well!',
      options: {
        type: 'success',
      },
    },
  ],
}
