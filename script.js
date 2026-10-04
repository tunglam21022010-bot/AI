const quizData = [
{n:1,part:"A · Nhận thức",q:"Theo bạn, dấu hiệu nào có thể cho thấy một video được tạo hoặc chỉnh sửa bằng AI?",a:["Hình ảnh quá hoàn hảo, thiếu tự nhiên","Chuyển động khuôn mặt hoặc môi không khớp với lời nói","Giọng nói có âm sắc bất thường","Tất cả các đáp án trên"],correct:3},
{n:2,part:"A · Nhận thức",q:"Nếu một video có hình ảnh và giọng nói rất chân thực, điều đó có chứng minh video được tạo bởi người thật không?",a:["Có","Không","Chỉ cần nhìn video là có thể xác định","Không biết"],correct:1},
{n:3,part:"A · Nhận thức",q:"Khi nghi ngờ một video có nội dung do AI tạo ra, hành động nào dưới đây phù hợp nhất?",a:["Tin nếu video có nhiều lượt xem","Tin nếu nhiều người bình luận “đúng”","Kiểm tra nguồn và đối chiếu thông tin với các nguồn đáng tin cậy","Tin nếu người trong video trông giống người thật"],correct:2},
{n:4,part:"A · Nhận thức",q:"Một video có gắn dòng chữ “AI-generated” ở phần mô tả. Điều này có nghĩa là:",a:["Toàn bộ thông tin trong video chắc chắn sai","Video chắc chắn không đáng tin","Video có sử dụng AI trong quá trình tạo nội dung, nhưng vẫn cần đánh giá riêng độ chính xác của thông tin","Video chắc chắn được tạo hoàn toàn bằng AI"],correct:2},
{n:5,part:"A · Nhận thức",q:"Yếu tố nào dưới đây không phải là căn cứ đủ đáng tin cậy để xác định một video là thật hay do AI tạo?",a:["Nguồn đăng tải","Sự nhất quán của hình ảnh, âm thanh và chuyển động","Số lượt xem của video","Đối chiếu với các nguồn khác"],correct:2},
{n:6,part:"B · Nhận diện qua video",q:"Video 1: Một nữ sinh khoảng 17 tuổi đứng trước một thư viện, nói: “Theo một nghiên cứu gần đây, nghe nhạc khi học luôn giúp học sinh ghi nhớ bài tốt hơn 30%.” Video khá chân thực, nhưng chuyển động môi ở một số âm tiết hơi lệch với âm thanh.",a:["Người thật quay","AI tạo","Không thể xác định","Không quan tâm"],correct:1,sub:"Bạn dựa vào dấu hiệu nào?"},
{n:7,part:"B · Nhận diện qua video",q:"Video 2: Một nam sinh xuất hiện trong lớp học và nói: “NASA vừa công bố rằng con người sẽ có thể sống trên Sao Hỏa vào năm 2030.” Hình ảnh cực kì chân thực, người nói tự nhiên, phụ đề rõ ràng và có logo NASA.",a:["Có","Không","Chưa chắc"],correct:null,checks:true},
{n:8,part:"B · Nhận diện qua video",q:"Video 3: Một video mô phỏng một sự kiện lịch sử. Trong khoảng 2 giây có 6 ngón tay, chữ trên bảng bị mờ, khuôn mặt hơi thay đổi khi quay sang bên. Bạn phát hiện bao nhiêu dấu hiệu bất thường?",a:["Không có","1","2","3 hoặc nhiều hơn"],correct:3,sub2:"Bạn có cho rằng đây là video AI không?",a2:["Có","Không","Chưa chắc"],correct2:0},
{n:9,part:"B · Nhận diện qua video",q:"Video 4: Video 1 lấy 15 giây đầu từ video gốc; Video 2 là phiên bản AI mô phỏng chính xác mọi cử chỉ và chi tiết nền nhưng có cổ áo lệch trong 2 giây và mí mắt bị mờ trong 2 giây. Theo bạn, đâu là video do người thật quay?",a:["Video 1","Video 2"],correct:0,video:true},
{n:10,part:"C · Tình huống",q:"Bạn xem một video AI nói về một sự kiện xã hội đang xảy ra. Video rất thuyết phục nhưng không có nguồn. Bạn sẽ:",a:["Tin vì video trông rất thật","Tin nếu có nhiều lượt xem","Tìm nguồn khác để kiểm chứng","Chia sẻ trước rồi kiểm chứng sau"],correct:2},
{n:11,part:"C · Tình huống",q:"Bạn xem một video và không nhận ra đó là video AI. Sau đó bạn phát hiện thông tin trong video là sai. Điều này khiến bạn:",a:["Cẩn thận hơn với video ngắn","Kiểm tra nguồn thường xuyên hơn","Ít tin video AI hơn","Không thay đổi cách tiếp nhận thông tin","Khác"],correct:null,opinion:true},
{n:12,part:"C · Tình huống",q:"Theo bạn, yếu tố nào khiến một video AI dễ khiến học sinh tin tưởng nhất?",a:["Hình ảnh chân thực","Giọng nói tự nhiên","Người xuất hiện là người nổi tiếng/chuyên gia","Nhiều lượt xem và tương tác","Có dẫn nguồn","Nội dung phù hợp với điều mình đã tin trước đó"],correct:null,opinion:true},
{n:13,part:"C · Tình huống",q:"Nếu một video AI truyền tải một thông tin đúng, nhưng người xem không biết video được tạo bằng AI, theo bạn thông tin đó:",a:["Vẫn có thể được xem là đáng tin nếu có nguồn xác thực","Không đáng tin vì do AI tạo","Chỉ đáng tin nếu nhiều người chia sẻ","Không thể xác định"],correct:null,opinion:true},
{n:14,part:"C · Câu mở",q:"Theo bạn, điều khó nhất khi tiếp nhận thông tin từ video ngắn do AI tạo là gì?",a:[],correct:null,opinion:true,open:true}
];
let state={i:0,answers:{},score:0,done:false};
const quiz=document.getElementById("quiz");
function renderQuiz(){
 if(state.done){renderResult();return}
 const d=quizData[state.i], pct=((state.i)/quizData.length)*100;
 let html=`<div class="quiz-shell"><div class="quiz-top"><div class="progress"><i style="width:${pct}%"></i></div><div class="score-badge">${state.i+1}/${quizData.length}</div></div><div class="quiz-card"><div class="eyebrow">${d.part}</div><h3>Câu ${d.n}</h3><p>${d.q}</p>`;
 if(d.video) html+=`<div class="question-context"><b>Video 1:</b> video gốc theo đường dẫn được cung cấp trong đề. <a href="https://youtu.be/69yqDAUdp_4?si=u6AgqyOmUDOAZp_o" target="_blank" rel="noopener">Mở video gốc ↗</a><br><b>Video 2:</b> phiên bản AI theo mô tả của đề.</div>`;
 if(d.opinion){
   if(d.open) html+=`<textarea id="openAns" class="sub-input" rows="6" placeholder="Viết câu trả lời của bạn..."></textarea>`;
   else html+=`<div class="answers">${d.a.map((x,j)=>`<button class="answer ${state.answers[d.n]?.main===j?"selected":""}" onclick="pick(${j})">${String.fromCharCode(65+j)}. ${x}</button>`).join("")}</div>`;
 } else {
   html+=`<div class="answers">${d.a.map((x,j)=>`<button class="answer ${state.answers[d.n]?.main===j?"selected":""}" onclick="pick(${j})">${String.fromCharCode(65+j)}. ${x}</button>`).join("")}</div>`;
   if(d.sub) html+=`<div class="question-context"><b>Câu hỏi phụ:</b> Bạn dựa vào dấu hiệu nào?<textarea id="subAns" class="sub-input" placeholder="Ghi câu trả lời...">${state.answers[d.n]?.sub||""}</textarea></div>`;
   if(d.checks) html+=`<div class="question-context"><b>Nếu chọn B hoặc C:</b> Bạn sẽ làm gì để kiểm chứng? (chọn tối đa 2)</div><div class="checks">${["Tìm kiếm thông tin trên Google","Kiểm tra website chính thức của NASA","Xem bình luận","Hỏi bạn bè","Không kiểm chứng"].map((x,j)=>`<label><input type="checkbox" name="check" value="${j}" ${state.answers[d.n]?.checks?.includes(j)?"checked":""}>${String.fromCharCode(65+j)}. ${x}</label>`).join("")}</div>`;
   if(d.sub2) html+=`<div class="question-context"><b>${d.sub2}</b><div class="answers">${d.a2.map((x,j)=>`<button class="answer ${state.answers[d.n]?.sub2===j?"selected":""}" onclick="pickSub2(${j})">${String.fromCharCode(65+j)}. ${x}</button>`).join("")}</div></div>`;
 }
 html+=`<p class="quiz-note">Các câu 11–14 dùng để ghi nhận nhận thức/thái độ và không tính điểm.</p><div class="quiz-nav"><button class="btn secondary" onclick="prev()" ${state.i===0?"disabled":""}>← Quay lại</button><button class="btn primary" onclick="next()">${state.i===quizData.length-1?"Hoàn thành":"Tiếp theo →"}</button></div></div></div>`;
 quiz.innerHTML=html;
}
window.pick=(j)=>{state.answers[quizData[state.i].n]??={};state.answers[quizData[state.i].n].main=j;renderQuiz()};
window.pickSub2=(j)=>{state.answers[quizData[state.i].n]??={};state.answers[quizData[state.i].n].sub2=j;renderQuiz()};
window.prev=()=>{saveInputs();if(state.i>0){state.i--;renderQuiz()}};
window.next=()=>{saveInputs();const d=quizData[state.i]; if(!d.opinion && d.correct!==null && state.answers[d.n]?.main===undefined){alert("Hãy chọn một phương án trước khi tiếp tục.");return} if(d.sub && !state.answers[d.n]?.sub?.trim()){alert("Hãy trả lời câu hỏi phụ.");return} if(d.checks && d.correct===null){const arr=state.answers[d.n]?.checks||[];if((state.answers[d.n]?.main===1||state.answers[d.n]?.main===2)&&arr.length===0){alert("Hãy chọn phương án kiểm chứng.");return}} if(state.i<quizData.length-1){state.i++;renderQuiz()}else{state.done=true;calculate();renderQuiz()}};
function saveInputs(){const d=quizData[state.i], x=state.answers[d.n]??{};const sub=document.getElementById("subAns"),open=document.getElementById("openAns");if(sub)x.sub=sub.value;if(open)x.open=open.value;const checks=[...document.querySelectorAll('input[name="check"]:checked')].map(e=>+e.value);if(checks.length)x.checks=checks;state.answers[d.n]=x}
function calculate(){state.score=0;quizData.filter(d=>d.n<=10).forEach(d=>{const x=state.answers[d.n]||{};let ok=false;if(d.n===6)ok=x.main===1 && !!x.sub?.trim();else if(d.n===7)ok=x.main===1||x.main===2? (x.checks||[]).includes(0)&&(x.checks||[]).includes(1):x.main===0;else if(d.n===8)ok=x.main===3&&x.sub2===0;else ok=x.main===d.correct;if(ok)state.score++})}
function renderResult(){const good=state.score>=6;quiz.innerHTML=`<div class="quiz-shell"><div class="result"><div class="eyebrow" style="color:#a69fff">KẾT QUẢ</div><h3>${good?"Năng lực tiếp nhận - đánh giá thông tin tốt":"Năng lực tiếp nhận - đánh giá thông tin còn hạn chế"}</h3><div class="score-big">${state.score}/10</div><p>${good?"Bạn đã đạt từ 6/10 điểm trở lên. Hãy tiếp tục duy trì thói quen kiểm chứng nguồn và bằng chứng trước khi tin hoặc chia sẻ.":"Bạn đạt dưới 6/10 điểm. Hãy xem lại phần “Hiểu về video AI” và luyện lại để củng cố kỹ năng nhận diện, kiểm chứng."}</p><button class="btn secondary" onclick="state={i:0,answers:{},score:0,done:false};renderQuiz()">Làm lại bài</button></div></div>`}
renderQuiz();

const faqs=[
["Video AI có phải lúc nào cũng xấu không?","Không. Video AI có thể hỗ trợ học tập, tăng hứng thú, cá nhân hóa nội dung và phát triển sáng tạo. Điều quan trọng là đánh giá nguồn và độ chính xác của thông tin."],
["Em lỡ chia sẻ video giả thì phải làm sao?","Hãy dừng lan truyền, kiểm tra lại nguồn, đính chính thông tin nếu cần và thông báo cho những người đã nhận nội dung."],
["Có công cụ nào kiểm tra video AI chính xác 100% không?","Không. Vì vậy cần kết hợp quan sát dấu hiệu với kiểm chứng nguồn và đối chiếu thông tin."],
["Bạn em dùng mặt em làm video AI thì báo ai?","Hãy lưu bằng chứng, báo cáo nội dung trên nền tảng đang đăng tải và tìm sự hỗ trợ từ người lớn/nhà trường khi cần."],
["Làm sao bỏ thói quen lướt video trước khi ngủ?","Có thể bắt đầu bằng việc đặt thời gian dừng sử dụng thiết bị, để điện thoại xa giường và thay video ngắn bằng một hoạt động thư giãn khác."]
];
document.getElementById("faqList").innerHTML=faqs.map((f,i)=>`<div class="faq-item"><div class="faq-q">${f[0]}</div><div class="faq-a">${f[1]}</div></div>`).join("");
document.querySelectorAll(".faq-q").forEach(e=>e.onclick=()=>e.parentElement.classList.toggle("open"));

let questions=JSON.parse(localStorage.getItem("aiShortCheckQuestions")||"[]");
function renderQuestions(filter=""){const list=document.getElementById("questionList");const arr=questions.filter(x=>x.text.toLowerCase().includes(filter.toLowerCase())||x.name.toLowerCase().includes(filter.toLowerCase()));list.innerHTML=(arr.length?arr:[{name:"AI - SHORT CHECK",text:"Chưa có câu hỏi được duyệt. Hãy là người đầu tiên đặt câu hỏi!",url:"",pending:false}]).map(x=>`<article class="question-item"><div class="meta"><b>${escapeHtml(x.name)}</b> · ${x.pending?"<span class=pending>Chờ duyệt</span>":"Đã duyệt"}</div><p>${escapeHtml(x.text)}</p>${x.url?`<small><a href="${encodeURI(x.url)}" target="_blank" rel="noopener">Nguồn tham khảo ↗</a></small>`:""}</article>`).join("")}
function escapeHtml(s){return s.replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
document.getElementById("questionForm").onsubmit=e=>{e.preventDefault();const q={name:document.getElementById("displayName").value.trim(),text:document.getElementById("questionText").value.trim(),url:document.getElementById("sourceUrl").value.trim(),pending:true};questions.unshift(q);localStorage.setItem("aiShortCheckQuestions",JSON.stringify(questions));e.target.reset();renderQuestions();alert("Đã gửi. Câu hỏi đang ở trạng thái chờ duyệt.");};
document.getElementById("searchBtn").onclick=()=>renderQuestions(document.getElementById("qaSearch").value);
document.getElementById("qaSearch").oninput=e=>renderQuestions(e.target.value);
renderQuestions();
