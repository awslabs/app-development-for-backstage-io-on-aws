import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx(styles.heroBanner)}>
      <Box
        sx={{
          backgroundColor: " #0D317F",
          padding: "0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Grid  alignItems="center">
            <Grid item xs={12}>
              <Box className={styles.heroContent}>
                <div className="hero hero--primary bgimg logoWrapper" style={{ transform: "scale(0.6)" }}>
               </div>
                {/* <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    color: "white",
                    fontWeight: 700,
                    marginBottom: "16px",
                    fontSize: { xs: "2.5rem", md: "5.5rem" },
                    textAlign: { xs: "center", sm: "center" }
                  }}
                >
                  Harmonix
                </Typography> */}

                <Typography
                  variant="h2"
                  component="span"
                  className={styles.logoText2}
                  sx={{
                    color: "#ff9900",
                    fontWeight: 700,
                    display: "block",
                    marginBottom: "16px",
                    fontSize: { xs: "2rem", md: "2.5rem" },
                    textAlign: { xs: "center", sm: "center" }
                  }}
                >
                  on AWS
                </Typography>

                <Typography
                  variant="h3"
                  component="p"
                  className="hero__subtitle tagline"
                  sx={{
                    color: "white",
                    marginBottom: "20px",
                    fontSize: { xs: "1.25rem", md: "1.5rem" },
                    fontWeight: 400,
                    lineHeight: 1.5,
                    textAlign: { xs: "center", sm: "center" },
                    mx: "auto"
                  }}
                >
                  Deprecated Reference Implementation - For Educational Purposes Only
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Deprecated reference implementation - No longer maintained. For educational and reference purposes only."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}