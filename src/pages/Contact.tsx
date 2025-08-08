const Contact = () => (
  <main className="container mx-auto px-4 py-12 md:px-6">
    <header>
      <h1 className="text-3xl font-bold">Contact / Booking</h1>
      <p className="mt-2 text-muted-foreground">Book via Cal.com or reach out—simple and fast.</p>
    </header>
    <div className="mt-6">
      <a
        href="https://cal.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
        aria-label="Open Cal.com scheduling"
      >
        Open Cal.com Scheduling
      </a>
    </div>
  </main>
);

export default Contact;
