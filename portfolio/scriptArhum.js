// Dynamic cards 🎴
function createProjectCard(projectURL, projectImage, projectDecription, capsule1, capsule2, capsule3, projectName) {


    const cardHTML =
        ` <div class="project-card">
                    <div class="project-img-cont">
                        <img src="${projectImage}">
                    </div>
                    <div class="capsule-section">
                        <span class="capsule">${capsule1}</span>
                        <span class="capsule">${capsule2}</span>
                        <span class="capsule">${capsule3}</span>
                    </div>
                    <h2 class="project-name">
                        ${projectName}
                    </h2>

                    <div class="project-description">
                        ${projectDecription}
                        <a href="${projectURL}" target="_blank">
                            <button class="OnlyBtn">See Live
                                <img id="liveImg" src="https://cdn-icons-png.flaticon.com/512/8064/8064583.png">
                            </button>
                        </a>
                    </div>
                </div>`


    const container = document.querySelector("#pj-cont")
    container.innerHTML = cardHTML + container.innerHTML

}
createProjectCard("https://golf-family.vercel.app", "https://assets.awwwards.com/awards/element/2023/06/6481acf826266951398837.jpg", "A Sidcup Family Golf clone built with GSAP for interactive transitions.", "CSS", "JS", "GSAP", "Sidcup family golf")

createProjectCard("https://teslacloned.vercel.app/", "https://shorturl.at/LqpMd", " A clone of the Tesla landing page featuring a sleek design.", "HTML", "CSS", "Media Queries", "Tesla Clone")

createProjectCard("https://disccloned.vercel.app", "https://shorturl.at/0LxZy", "A clean clone of Discord, built entirely with HTML and CSS.", "HTML", "CSS", "Media Queries", "Discord Clone")

createProjectCard("https://sirather.vercel.app", "https://shorturl.at/W18bu", "A premium fronted website for DJ science college's professor.", "HTML", "CSS", "JS", "Sir Ather")

createProjectCard("https://olxcloned.vercel.app/", "https://shorturl.at/R8J9g", "An OLX.com clone built dynamically using JavaScript objects.", "HTML", "CSS", "JS", "OLX Clone")

createProjectCard("https://cplayground.vercel.app", "https://media.istockphoto.com/id/1124838925/vector/programming-code-application-window.jpg?s=612x612&w=0&k=20&c=2J2JZP7cQltD03QkOMl6JYfzcmD-GN7bjrWVuieD7Jc=", "A code Cheatsheet for HTML, CSS and Javascript.", "HTML", "CSS", "Prism JS", "codePlayGround")

createProjectCard("https://outfittersclone.vercel.app", "https://nishatemporium.com/wp-content/uploads/2019/07/outfitters.png", "The Outfitters clone includes sorting functionality to browse efficiently.", "HTML", "CSS", "JS", "Outfitters Clone")

createProjectCard("https://sharespaceui.vercel.app", "https://media.sproutsocial.com/uploads/2022/05/How-to-post-on-instagram-from-pc.svg", "A sleek platform where users can easily upload their posts.", "HTML", "CSS", "JS", "ShareSpace")

createProjectCard("https://placehold-io.vercel.app", "https://st2.depositphotos.com/1007566/10635/v/450/depositphotos_106355724-stock-illustration-avatar-person-design.jpg", "Create customizable placeholder text or images with Placehold.", "HTML", "CSS", "JS", "Placehold.io")

createProjectCard("https://climate-io.vercel.app/", "https://destine.ecmwf.int/wp-content/uploads/2024/06/AdobeStock_583854493-scaled.jpeg", "Weather app that uses APIs to fetch real-time forecasts.", "HTML", "CSS", "JS", "Climate.io")

createProjectCard("https://numbercamo.vercel.app", "https://www.communityplaythings.co.uk/-/media/images/learning-library-images/articles/bubble-printing/bubbles_article_image_6.ashx?rev=dd589cc5dac44412815ab8837a8dc3a0&sc_lang=en&hash=2FEDB2814A125C0E50D20EE1696E63AB", "A Hand-eye coordination game developed with using Javascript.", "HTML", "CSS", "JS", "numberCamo")

createProjectCard("https://gkcloned.vercel.app", "https://www.muycomputer.com/wp-content/uploads/2024/04/GoogleKeep.jpg", "A Google Keep clone that allows users to create and manage notes.", "HTML", "CSS", "JS", "Google Keep Clone")

createProjectCard("https://io-flip.vercel.app", "https://storage.googleapis.com/gweb-developer-goog-blog-assets/images/image3.original.jpg", "A flip-the-card game where users match pairs by flipping cards.", "HTML", "CSS", "JS", "I/O Flip")

createProjectCard("https://manage-io.vercel.app/", "https://s3-us-west-1.amazonaws.com/angular-university/course-images/serverless-angular-small.png", "A Firebase-powered database, for real-world applications.", "CSS", "JS", "FireBase", "Manage.io")

createProjectCard("https://examiner-io.vercel.app/", "https://i.natgeofe.com/k/e8c948a1-1d40-4ded-9ce8-b8cb0790e195/quizwhiz_ngkhub_16x9.jpg?w=1200", "Quiz application with login, sign-up, and interactive quiz features.", "HTML", "CSS", "JS", "Examiner.io")





