const links = ['https://www.instagram.com/p/B_adzDYg_te/?utm_source=ig_web_button_share_sheet', 
               'https://www.instagram.com/p/B_h1A34gXWM/?utm_source=ig_web_button_share_sheet',
               'https://www.instagram.com/p/CA-Vcs3AA7p/?utm_source=ig_web_button_share_sheet',
               'https://www.instagram.com/p/CBYaJn8AGXG/',
               'https://www.instagram.com/p/CBTC4JDAOrf/?utm_source=ig_web_copy_link',
               'https://www.instagram.com/p/CBGdzM3JcXi/',
               'https://www.instagram.com/p/CAgQDm9AvA-/',
               'https://www.instagram.com/p/B_nBxLsA1av/',
               'https://www.instagram.com/p/B_AS2EoApFu/',
               'https://www.instagram.com/p/B-980mWAUyz/',
               'https://www.instagram.com/p/B-rzz3FgzDZ/',
               'https://www.instagram.com/p/B-ezn9IgB-U/']

randomLink = links[Math.floor(Math.random() * links.length)] 
window.location.replace(`${randomLink}`)

