const buttonShare = document.getElementById('btn-share');
    const shareIcon = document.getElementById('share-icon');
    const userContainer = document.getElementById('user-container');
    const userInfo = document.getElementById('user-info');
    const desktopSocialContainer = document.getElementById('desktop-social-container');
    const mobileSocialContainer = document.getElementById('mobile-social-container');
    buttonShare.addEventListener('click', () => {
      buttonShare.classList.toggle('bg-gray-500');
      shareIcon.classList.toggle('share-icon-filter');
      desktopSocialContainer.classList.toggle('lg:block');
      mobileSocialContainer.classList.toggle('block');
      mobileSocialContainer.classList.toggle('hidden');
      userContainer.classList.toggle('bg-gray-600');
      userContainer.classList.toggle('lg:bg-transparent');
      userInfo.classList.toggle('hidden');
    });