import MainNav from "@/app/ui/MainNav";
import WelcomeSection from "@/app/ui/Home/WelcomeSection";
import BlogsContainer from "@/app/ui/Home/BlogsContainer";
export default function Home() {
  return (
    <div className="">
      <MainNav />
      <WelcomeSection />
      <BlogsContainer />
    </div>
  );
}
