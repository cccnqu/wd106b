# 錯誤 bug

localStorage.setItem() 在蘋果 Safari 的《無痕模式》由於容量為零，所以不能用！

* https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem

setItem() may throw an exception if the storage is full. Particularly, in Mobile Safari (since iOS 5) it always throws when the user enters private mode (Safari sets quota to 0 bytes in private mode, contrary to other browsers, who allow storage in private mode, using separate data containers)
