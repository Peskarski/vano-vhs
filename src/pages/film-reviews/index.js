import * as React from "react";
import Layout from "../../components/Layout";
import ReviewRoll from "../../components/ReviewRoll";

export default function ReviewsIndexPage() {
  return (
    <Layout
      title="Movie Reviews"
      description="New movie reviews from Vano VHS!"
    >
      <div
        className="margin-top-0"
      >
        <h1
          className="has-text-weight-bold is-size-1"
          style={{
            boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
            backgroundColor: "#fccd04",
            color: "black",
            padding: "1rem",
            margin: '0 auto',
            textAlign: "center",
          }}
        >
          Movie Reviews
        </h1>
      </div>
      <section className="section">
        <div className="container" style={{ maxWidth: '1600px' }}>
          <div className="content">
            <ReviewRoll />
          </div>
        </div>
      </section>
    </Layout>
  );
}
