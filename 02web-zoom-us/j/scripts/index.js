const links = ['https://www.instagram.com/p/B_adzDYg_te/?utm_source=ig_web_button_share_sheet', 
               'https://www.instagram.com/p/B_h1A34gXWM/?utm_source=ig_web_button_share_sheet',
               'https://www.instagram.com/p/CA-Vcs3AA7p/?utm_source=ig_web_button_share_sheet']

randomLink = links[Math.floor(Math.random() * links.length)] 

window.location.replace(`${randomLink}`)
