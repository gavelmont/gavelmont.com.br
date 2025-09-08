/**
 * @param {string} url
 * @returns {object}
 */
function getIconByUrl(url) {
    if (url.includes('discord')) {
        return {icon: 'discord.svg', class: 'bg-primary', name: 'Discord'};
    } else if (url.includes('facebook')) {
        return {icon: 'facebook.svg', class: 'bg-primary', name: 'Facebook'};
    } else if (url.includes('gamejolt')) {
        return {icon: 'gamejolt.svg', class: 'bg-black', name: 'Game Jolt'};
    } else if (url.includes('play.google')) {
        return {icon: 'googleplay.svg', class: 'bg-success', name: 'Google Play'};
    } else if (url.includes('instagram')) {
        return {icon: 'instagram.svg', class: 'bg-danger bg-gradient', name: 'Instagram'};
    } else if (url.includes('itch.io')) {
        return {icon: 'itchio.svg', class: 'bg-danger', name: 'itch.io'};
    } else if (url.includes('linkedin')) {
        return {icon: 'linkedin.svg', class: 'bg-primary', name: 'LinkedIn'};
    } else if (url.includes('steam')) {
        return {icon: 'steam.svg', class: 'bg-primary-subtle', name: 'Steam'};
    } else if (url.includes('tiktok')) {
        return {icon: 'tiktok.svg', class: 'bg-black', name: 'TikTok'};
    } else if (url.includes('twitter')) {
        return {icon: 'twitter.svg', class: 'bg-info', name: 'Twitter'};
    }  else if (url.includes('x.com')) {
        return {icon: 'x.svg', class: 'bg-black', name: 'X'};
    } else if (url.includes('youtube')) {
        return {icon: 'youtube.svg', class: 'bg-danger', name: 'YouTube'};
    } else {
        return {icon: 'external.svg', class: 'bg-secondary bg-gradient', name: url.split('//', 2).pop()};
    }
}
