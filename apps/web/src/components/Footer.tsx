export default function Footer() {
  return (
    <footer className="bg-text-dark text-primary-cream py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">이웃집 수달</h3>
          <p className="text-sm">수달과 함께하는 특별한 경험</p>
        </div>

        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="hover:text-primary-orange transition-colors">Instagram</a>
          <a href="#" className="hover:text-primary-orange transition-colors">YouTube</a>
          <a href="#" className="hover:text-primary-orange transition-colors">Blog</a>
        </div>

        <div className="text-xs mb-4">
          <p>&copy; {new Date().getFullYear()} 이웃집 수달. All rights reserved.</p>
          <p>주소: [이웃집 수달 주소]</p>
          <p>문의: [문의 전화번호]</p>
        </div>

        <div className="text-xs">
          <a href="#" className="hover:text-primary-orange transition-colors">개인정보처리방침</a> | 
          <a href="#" className="hover:text-primary-orange transition-colors">이용약관</a>
        </div>
      </div>
    </footer>
  );
}
