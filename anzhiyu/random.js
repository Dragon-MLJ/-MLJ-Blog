var posts=["Hello World/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"铭心石刻","hundredSuffix":"","link":"https://blog.kouseki.cn/","avatar":"https://raw.githubusercontent.com/Dragon-MLJ/Dragon-MLJ-Figure-bed/main/link/ming.webp","descr":"愿岁并谢，与友长兮","siteshot":"https://raw.githubusercontent.com/Dragon-MLJ/Dragon-MLJ-Figure-bed/main/link/ming1.webp"},{"name":"安知鱼","hundredSuffix":"","link":"https://blog.anheyu.com/","avatar":"https://raw.githubusercontent.com/Dragon-MLJ/Dragon-MLJ-Figure-bed/link/link/anzhiyu.jpg","descr":"生活明朗，万物可爱","siteshot":"https://raw.githubusercontent.com/Dragon-MLJ/Dragon-MLJ-Figure-bed/link/link/anzhiy.cn.jpg"},{"name":"moeyy","hundredSuffix":"","link":"https://moeyy.cn/","avatar":"https://raw.githubusercontent.com/Dragon-MLJ/Dragon-MLJ-Figure-bed/link/link/moeyy1%20.png","descr":"一条有远大理想的鱼","siteshot":"https://raw.githubusercontent.com/Dragon-MLJ/Dragon-MLJ-Figure-bed/link/link/moeyy.png"},{"name":"-MLJ-","hundredSuffix":"","link":"https://dragon-mlj.github.io/","avatar":"https://raw.githubusercontent.com/Dragon-MLJ/Dragon-MLJ-Figure-bed/link/link/Dragon-MLJ1.jpg","descr":"I Love Elaina","siteshot":"https://raw.githubusercontent.com/Dragon-MLJ/Dragon-MLJ-Figure-bed/link/link/Dragon-MLJ.png"},{"name":"屑殇的小破站","link":"https://jinghuashang.cn/","avatar":"https://raw.githubusercontent.com/Dragon-MLJ/Dragon-MLJ-Figure-bed/main/link/Jinghuashang.webp","descr":"桃李春风一杯酒，江湖夜雨十年灯","siteshot":"https://raw.githubusercontent.com/Dragon-MLJ/Dragon-MLJ-Figure-bed/main/link/Jinghuashang1.webp"},{"name":"铭心石刻","hundredSuffix":"","link":"https://blog.kouseki.cn/","avatar":"https://raw.githubusercontent.com/Dragon-MLJ/Dragon-MLJ-Figure-bed/main/link/ming.webp","descr":"愿岁并谢，与友长兮","siteshot":"https://raw.githubusercontent.com/Dragon-MLJ/Dragon-MLJ-Figure-bed/main/link/ming1.webp","tag":"荐"},{"name":"安知鱼","hundredSuffix":"","link":"https://blog.anheyu.com","avatar":"https://raw.githubusercontent.com/Dragon-MLJ/Dragon-MLJ-Figure-bed/link/link/anzhiyu.jpg","descr":"生活明朗，万物可爱"},{"name":"moeyy","hundredSuffix":"","link":"https://moeyy.cn/","avatar":"https://raw.githubusercontent.com/Dragon-MLJ/Dragon-MLJ-Figure-bed/link/link/moeyy1%20.png","descr":"一条有远大理想的鱼"},{"name":"-MLJ-","hundredSuffix":"","link":"https://dragon-mlj.github.io/","avatar":"https://raw.githubusercontent.com/Dragon-MLJ/Dragon-MLJ-Figure-bed/link/link/Dragon-MLJ1.jpg","descr":"I Love Elaina"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };