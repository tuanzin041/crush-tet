window.onload = function() {
    // Play nhạc nền
    var audio = document.getElementById("audio");
    audio.play();

    // Cấu hình và chạy Typed.js cho hiệu ứng gõ chữ
    var options = {
        strings: [
            "Này, siêu nhân hồng của tớ!", 
            "Năm mới rồi, nhưng hôm nay tớ thấy cậu có vẻ hơi mệt.", 
            "Đừng buồn nhé, vì siêu nhân hồng nào cũng cần nghỉ ngơi và nạp lại năng lượng mà!",
            "Cố lên, mọi chuyện rồi sẽ ổn thôi, tớ tin cậu mà.",
            "Nhân dịp năm mới, tớ chúc cậu thật nhiều sức khỏe (để còn chiến đấu với thế giới),",
            "may mắn (để mọi thứ nhẹ nhàng hơn một chút), và một núi niềm vui để cậu không còn thấy áp lực nữa.",
            "À, đừng quên cười nha, nụ cười của cậu là năng lượng tích cực nhất mà tớ biết đấy. 😊",
            "Nếu mệt quá thì cứ nghỉ một tí, để siêu nhân hồng hôm nay được làm \"hồng nhỏ dễ thương\" thôi.",
            "Tớ đây luôn sẵn sàng làm đồng đội, nghe cậu tâm sự, hoặc thậm chí kể chuyện cười nhạt nhẽo cho cậu giải trí. 😂",
            "Chúc siêu nhân hồng của tớ năm mới thật hạnh phúc và luôn nhớ rằng cậu không cần hoàn hảo đâu,",
            "vì chính cậu đã tuyệt lắm rồi! ❤️"
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1000,
        startDelay: 500,
        loop: true
    };

    // Khởi tạo Typed.js để tạo hiệu ứng gõ chữ
    var typed = new Typed("#typed-output", options);
};