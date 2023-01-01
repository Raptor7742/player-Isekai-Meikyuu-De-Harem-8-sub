const playerInstance = jwplayer("player").setup({
  controls: true,
  sharing: true,
  displaytitle: true,
  displaydescription: true,
  abouttext: "",
  aboutlink: "",

  skin: {
    name: "netflix"
  },

  logo: {
    file:
      "",
    link: ""
  },

  captions: {
    color: "#FFF",
    fontSize: 14,
    backgroundOpacity: 0,
    edgeStyle: "raised"
  },

  playlist: [
    {
      title: "Isekai Meikyuu De Harem - épisode 8 VOSTFR",
      description: "Vous regardez",
      image: "https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2022/03/isekaimeikyuudeharemwo_keyvisual-1-e1648179739159.jpg?resize=696%2C391&ssl=1",
      sources: [
        {
          file:
            "",
          label: "1080p",
          default: true
        },
        {
          file:
            "https://m116.syncusercontent.com/mfs-60:3621721c832a59e0e93ee0c534e14d6f=============================/p/%5BTsundere-Raws%5D_Isekai_Meikyuu_de_Harem_wo_-_08_VOSTFR_(CR)_%5BWEB_720p_x264_AAC%5D.mp4?allowdd=0&datakey=cukz9cAze9sFMy5U2S8wai+otTtb085R0LVi0zuKcL6Tu8JkkNWgz3HkMjNuVZCkS8ry0O+B2G37hVsvPrWfr0Kcw1ofCyGiiUmr5WWtpv/s7G7nGyFCl8ABIovaFOCKOkb3t1g6B19r4FluBoM8AGFBsjnde/FesaawEtxwhzdrewbleQTeWQOCBq2trkVWUHxVZwt8qt2Hyw644YsCTJr/US4fUBxjrAIRJLKnowqiWBcixPx6RpzNDx16Co+Qz7YQMks5JvzPtYC+mirrHJ2H33ymtKzQlIPAwvdbkbYvg6+9Wng15etC6E1+3VlvOQzFDNW4yY0ZoQI97hV2+A&engine=ln-2.3.7.3&errurl=E+j7vbexz27jis1h0DEzPG8amRe81UywteuMkgLPirsc5frkaDHhB1ucSwQVj6aZ6fBrA2MKJw6/Thqr2VEwUz/C+ef+g3/Dz/PiNOwMQuDaN1irFJmqLxqHC/OniHxlasZwzlwgaALZam8E9VLk24BaQwvbJWx+Pzp8wl0ygeLG1Y4xWGb0xcT58l67K4HUvGhHOa9mXCpk7scG6NLnSXQDdYLe1oP0UDBeTjYiNuSPkGXuLSiBezz//y1xspVQ07/KuEZTwD0/t9sYdhKsjdcKyySxBedhxihBwECwoOvXd0FsxneI5T6nsgQ/MDb881lFWKl0NqtzXZDHL27Tiw==&header1=Q29udGVudC1UeXBlOiB2aWRlby9tcDQ&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iJTVCVHN1bmRlcmUtUmF3cyU1RF9Jc2VrYWlfTWVpa3l1dV9kZV9IYXJlbV93b18tXzA4X1ZPU1RGUl8oQ1IpXyU1QldFQl83MjBwX3gyNjRfQUFDJTVELm1wNCI7ZmlsZW5hbWUqPVVURi04JyclNUJUc3VuZGVyZS1SYXdzJTVEX0lzZWthaV9NZWlreXV1X2RlX0hhcmVtX3dvXy1fMDhfVk9TVEZSXyhDUilfJTVCV0VCXzcyMHBfeDI2NF9BQUMlNUQubXA0Ow&ipaddress=1458994159&linkcachekey=b991af620&linkoid=1546380013&mode=101&sharelink_id=8021205850013&timestamp=1672598141242&uagent=220523ca5285197b0fad467e0e72e6907a6c5738&signature=461f77c1e97d677071c365fc1e72ec1eb340c0dc&cachekey=60:3621721c832a59e0e93ee0c534e14d6f=============================",
          label: "720p"
        },
        {
          file:
            "",
          label: "480p"
        },
        {
          file:
            "",
          label: "360p"
        },
        {
          file:
            "",
          label: "240p"
        },
        {
          file:
            "",
          label: "160p"
        }
      ],
      
      tracks: [
        {
          file: "",
          kind: "thumbnails"
        }
      ]
    }
  ],
  advertising: {
    client: "vast",
    schedule: [
      {
        offset: "pre",
        tag:
          "https://www.videosprofitnetwork.com/watch.xml?key=d904b92c1f6cc769c59d030320a66f69"
      }
    ]
  }
});

playerInstance.on("ready", function () {
  const buttonId = "download-video-button";
  const iconPath =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTMgMTloMTh2Mkgzdi0yem0xMC01LjgyOEwxOS4wNzEgNy4xbDEuNDE0IDEuNDE0TDEyIDE3IDMuNTE1IDguNTE1IDQuOTI5IDcuMSAxMSAxMy4xN1YyaDJ2MTEuMTcyeiIgZmlsbD0icmdiYSgyNDcsMjQ3LDI0NywxKSIvPjwvc3ZnPg==";
  const tooltipText = "Download Video";

  // Call the player's `addButton` API method to add the custom button
  playerInstance.addButton(iconPath, tooltipText, buttonClickAction, buttonId);

  // This function is executed when the button is clicked
  function buttonClickAction() {
    const playlistItem = playerInstance.getPlaylistItem();
    const anchor = document.createElement("a");
    const fileUrl = playlistItem.file;
    anchor.setAttribute("href", fileUrl);
    const downloadName = playlistItem.file.split("/").pop();
    anchor.setAttribute("download", downloadName);
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  // Move the timeslider in-line with other controls
  const playerContainer = playerInstance.getContainer();
  const buttonContainer = playerContainer.querySelector(".jw-button-container");
  const spacer = buttonContainer.querySelector(".jw-spacer");
  const timeSlider = playerContainer.querySelector(".jw-slider-time");
  buttonContainer.replaceChild(timeSlider, spacer);

  // Detect adblock
  playerInstance.on("adBlock", () => {
    const modal = document.querySelector("div.modal");
    modal.style.display = "flex";

    document
      .getElementById("close")
      .addEventListener("click", () => location.reload());
  });

  // Forward 10 seconds
  const rewindContainer = playerContainer.querySelector(
    ".jw-display-icon-rewind"
  );
  const forwardContainer = rewindContainer.cloneNode(true);
  const forwardDisplayButton = forwardContainer.querySelector(
    ".jw-icon-rewind"
  );
  forwardDisplayButton.style.transform = "scaleX(-1)";
  forwardDisplayButton.ariaLabel = "Forward 10 Seconds";
  const nextContainer = playerContainer.querySelector(".jw-display-icon-next");
  nextContainer.parentNode.insertBefore(forwardContainer, nextContainer);

  // control bar icon
  playerContainer.querySelector(".jw-display-icon-next").style.display = "none"; // hide next button
  const rewindControlBarButton = buttonContainer.querySelector(
    ".jw-icon-rewind"
  );
  const forwardControlBarButton = rewindControlBarButton.cloneNode(true);
  forwardControlBarButton.style.transform = "scaleX(-1)";
  forwardControlBarButton.ariaLabel = "Forward 10 Seconds";
  rewindControlBarButton.parentNode.insertBefore(
    forwardControlBarButton,
    rewindControlBarButton.nextElementSibling
  );

  // add onclick handlers
  [forwardDisplayButton, forwardControlBarButton].forEach((button) => {
    button.onclick = () => {
      playerInstance.seek(playerInstance.getPosition() + 10);
    };
  });
});
