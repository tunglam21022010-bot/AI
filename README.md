# AI - SHORT CHECK

Website giáo dục kỹ năng số dành cho học sinh THPT.

## Chạy local
Mở `index.html` bằng trình duyệt, hoặc dùng VS Code Live Server.

## Deploy Vercel
1. Tạo repository GitHub và upload toàn bộ thư mục này.
2. Vào Vercel → Add New Project → chọn repository.
3. Framework: Other / static site.
4. Build Command: để trống.
5. Output Directory: `.` (hoặc mặc định theo giao diện Vercel).
6. Deploy.

Bạn cũng có thể kéo cả thư mục/project lên workflow import phù hợp của Vercel.

## Lưu ý về Hỏi & Đáp
Phiên bản hiện tại là bản frontend demo: câu hỏi được lưu bằng `localStorage` trên trình duyệt và mặc định hiển thị trạng thái "Chờ duyệt". Nó chưa có cơ sở dữ liệu dùng chung giữa nhiều người.

Nếu cần website thật có:
- đăng câu hỏi từ nhiều thiết bị;
- quản trị viên duyệt / từ chối;
- trả lời công khai;
- báo cáo nội dung;
- lưu nguồn;
thì cần nối thêm backend/database (ví dụ Vercel Functions + PostgreSQL/Supabase).

## Lưu ý về Flashcard
Yêu cầu có nhắc tới file HTML Canva `file:///C:/Users/asus/Downloads/...`, nhưng đường dẫn `file:///` chỉ tồn tại trên máy người gửi và chưa được đính kèm trong cuộc trò chuyện. Vì vậy flashcard hiện chỉ là khung tương tác, không tự bịa nội dung Canva. Hãy gửi file HTML đó để thay nội dung chính xác.
