---
sidebar_position: 1
---

# Intro

:::danger Project Deprecated

**This project is no longer actively maintained as of December 2025.**

**🚨 SECURITY NOTICE**: Please upgrade to v0.4.2 immediately to address critical security vulnerabilities.

The documentation below is preserved for reference purposes only. Do not use this project for new implementations.

:::

## What was Harmonix on AWS?
Harmonix on AWS (Previously known as OPA on AWS) was a reference implementation that brought the AWS cloud closer to developers. The platform allowed enterprise customers to build environments and applications on AWS without requiring application developers to upskill on cloud expertise. Harmonix on AWS was a reference implementation for an enterprise-grade, fully integrated internal developer platform that improved the workflow for application developers, with a secure and scalable experience for non-cloud developers.

Harmonix on AWS was built on a Cloud Native Computing Foundation (CNCF) project, [Backstage](https://backstage.io/), which is an open platform for building developer portals. The Backstage platform itself has been adopted by over 900 companies as their primary developer portal in the past 3 years and has over 100 plugins available for its end users. Harmonix on AWS took Backstage to the next level by seamlessly integrating it with AWS and packaging it together for enterprise use.

## Why did we build Harmonix on AWS?

 Customers usually start their journey on AWS with small groups, which usually consist of highly skilled individuals who are well-versed in cloud technologies. However, scaling that experience is the true challenge. Providing a better developer experience can help customers in their cloud adoption journey.

This challenge is even more difficult for enterprise customers that need to meet their organization's operational, security, and compliance standards. Platform engineering helps to reduce this bottleneck and to enable enterprises to scale and improve their developer experience and the use of AWS Services securely. 

The below image depicts how organizations have evolved from slow and manual processes into modern platforms that streamline application development.
<img width="100%" src="/img/docs/customer-journey.png"/>

## How did it work?
Harmonix on AWS provided the provisioning and operational layers to build applications quickly and securely via a self-service internal developer portal. It leveraged existing AWS Services like EKS and ECS so that users could enjoy the agility and scalability of these services.  It’s the best of both worlds - a customizable developer platform with the power and scale of AWS Services. The solution provided dozens of templates and patterns collected from different teams and customers. 

<img width="100%" src="/img/diagrams/opa-composite.png"/>


## What was included?

The [open source solution](https://github.com/awslabs/harmonix) included the following:

1. Complete source code to customize your own platform.
2. Dozens of templates and examples to create environments, providers, applications and AWS resources.
3. Backstage plugins and plugins source code.
4. Predefined CI/CD centralized pipelines for more than a dozen common patterns.
5. Documentation, support videos, and workshops (discontinued).

Refer to the [features page](features.md) for a complete list of capabilities.

## Getting Started

:::warning Deprecated Project

**Do not deploy this deprecated project.**

For reference only: [**creating a new platform**](getting-started/deploy-the-platform.md)

:::
