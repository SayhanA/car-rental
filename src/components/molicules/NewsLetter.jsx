import { useEffect, useState } from "react";
import { MdCheckCircle, MdSend } from "react-icons/md";
import SectionDescripton from "../atoms/SectionDescripton";
import SectionTitle from "../atoms/SectionTitle";
import Text from "../atoms/Text";
import TextSM from "../atoms/TextSM";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [resetTimer, setResetTimer] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubscribed(true);
    setIsLoading(false);
    setEmail("");

    // Reset success state after 3 seconds
    const timer = setTimeout(() => setIsSubscribed(false), 3000);
    setResetTimer(timer);
  };

  useEffect(() => {
    // Cleanup timer on unmount
    return () => {
      if (resetTimer) clearTimeout(resetTimer);
    };
  }, [resetTimer]);

  return (
    <section className="text-text-dark relative mb-10 overflow-hidden py-16">
      {/* Background Pattern */}
      <p className="text-text-lite/5 absolute top-1/2 left-1/2 -translate-1/2 text-[40rem]">
        @
      </p>

      <div className="relative container mx-auto px-4">
        <div className="mx-auto text-center">
          <div className="mb-10">
            <SectionTitle className="">Stay Updated with RentCar</SectionTitle>

            <SectionDescripton className="mt-3">
              {" "}
              Get exclusive deals, new car arrivals, and travel tips delivered
              straight to your inbox. Join thousands of satisfied customers who
              never miss our best offers.
            </SectionDescripton>
          </div>

          <div className="bg-background/0 mx-auto max-w-4xl rounded-lg">
            <div className="p-8">
              {!isSubscribed ? (
                <form
                  onSubmit={handleSubmit}
                  className="mx-auto max-w-2xl space-y-4"
                  noValidate
                >
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <div className="flex-1">
                      <label htmlFor="newsletter-email" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="newsletter-email"
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="h-12 w-full rounded-md border border-slate-200 bg-white px-4 text-base text-gray-900 placeholder-gray-500 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400 dark:focus:ring-blue-400"
                        disabled={isLoading}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading || !email}
                      className="flex h-12 items-center justify-center gap-2 rounded-md bg-blue-600 px-8 font-semibold text-white transition-colors duration-200 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-blue-700 dark:hover:bg-blue-600"
                    >
                      {isLoading ? (
                        <>
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          Subscribing...
                        </>
                      ) : (
                        <>
                          <MdSend className="h-4 w-4" />
                          Subscribe
                        </>
                      )}
                    </button>
                  </div>

                  <Text>
                    By subscribing, you agree to receive marketing emails from
                    RentCar. You can unsubscribe at any time.
                  </Text>
                </form>
              ) : (
                <div
                  className="py-4 text-center"
                  role="status"
                  aria-live="polite"
                >
                  <MdCheckCircle className="mx-auto mb-4 h-12 w-12 text-green-500" />

                  <Text className="text-text-dark">
                    Welcome to RentCar Newsletter!
                  </Text>

                  <Text>
                    Thank you for subscribing. Check your email for a
                    confirmation message.
                  </Text>
                </div>
              )}
            </div>
          </div>

          {/* Highlights below the form */}
          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: "🚗",
                title: "Exclusive Deals",
                desc: "Get access to member-only discounts and special offers",
              },
              {
                icon: "📧",
                title: "Weekly Updates",
                desc: "Stay informed about new vehicles and service updates",
              },
              {
                icon: "🎯",
                title: "Travel Tips",
                desc: "Expert advice for your road trips and travel planning",
              },
            ].map(({ icon, title, desc }, i) => (
              <div className="text-center" key={i}>
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-2xl dark:bg-white/5">
                  {icon}
                </div>
                <Text className="text-text-dark">{title}</Text>
                <TextSM className="text-text-lite">{desc}</TextSM>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
