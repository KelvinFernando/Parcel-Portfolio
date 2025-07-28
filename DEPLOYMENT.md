# Deployment Guide

This guide will help you deploy your Parcel React template to Netlify.

## 🚀 Quick Deploy to Netlify

### Option 1: Deploy from Git (Recommended)

1. **Push your code to Git**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repository-url>
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Choose your Git provider (GitHub, GitLab, Bitbucket)
   - Select your repository

3. **Configure Build Settings**
   - **Build command**: `yarn build`
   - **Publish directory**: `dist`
   - **Node version**: `18` (or your preferred version)

4. **Deploy**
   - Click "Deploy site"
   - Netlify will automatically build and deploy your site

### Option 2: Manual Deploy

1. **Build your project locally**
   ```bash
   yarn install
   yarn build
   ```

2. **Drag and Drop**
   - Go to [Netlify](https://netlify.com)
   - Drag the `dist` folder to the deploy area
   - Your site will be live instantly

## ⚙️ Environment Variables

If your app uses environment variables, add them in Netlify:

1. Go to your site settings in Netlify
2. Navigate to "Environment variables"
3. Add your variables:
   ```
   NODE_ENV=production
   REACT_APP_API_URL=your-api-url
   ```

## 🔧 Custom Domain

1. **Add Custom Domain**
   - Go to your site settings in Netlify
   - Navigate to "Domain management"
   - Click "Add custom domain"
   - Follow the DNS configuration instructions

2. **SSL Certificate**
   - Netlify automatically provides SSL certificates
   - No additional configuration needed

## 📊 Performance Optimization

### Build Optimization

The template is already optimized for production:

- **Code Splitting**: Parcel automatically splits your code
- **Image Optimization**: Images are optimized during build
- **Minification**: CSS and JS are minified
- **Tree Shaking**: Unused code is removed

### Netlify Optimizations

The `netlify.toml` file includes:

- **Caching Headers**: Static assets are cached for 1 year
- **Security Headers**: XSS protection, content type options
- **Redirect Rules**: SPA routing support

## 🔍 Monitoring

### Netlify Analytics

1. **Enable Analytics**
   - Go to your site settings
   - Navigate to "Analytics"
   - Enable "Netlify Analytics"

2. **View Metrics**
   - Page views
   - Unique visitors
   - Top pages
   - Referrers

### Performance Monitoring

1. **Lighthouse Scores**
   - Use Chrome DevTools
   - Run Lighthouse audit
   - Monitor Core Web Vitals

2. **Real User Monitoring**
   - Consider tools like Sentry
   - Monitor error rates
   - Track performance metrics

## 🚨 Troubleshooting

### Common Issues

1. **Build Fails**
   ```bash
   # Check build locally first
   yarn build
   
   # Check for missing dependencies
   yarn install
   ```

2. **404 Errors on Refresh**
   - Ensure `netlify.toml` has redirect rules
   - Check that SPA routing is configured

3. **Environment Variables Not Working**
   - Verify variable names start with `REACT_APP_`
   - Check Netlify environment variable settings

4. **Slow Build Times**
   - Enable build caching in Netlify
   - Consider using build plugins
   - Optimize dependencies

### Getting Help

- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)
- **Parcel Docs**: [parceljs.org](https://parceljs.org)
- **Community**: [Netlify Community](https://community.netlify.com)

## 🔄 Continuous Deployment

### Automatic Deploys

Netlify automatically deploys when you:

- Push to the main branch
- Create a pull request
- Merge a pull request

### Branch Deploys

1. **Preview Deployments**
   - Every PR gets a preview URL
   - Test changes before merging
   - Share with stakeholders

2. **Branch Deployments**
   - Deploy specific branches
   - Test features in isolation
   - Staging environments

## 📈 Scaling

### Performance

- **CDN**: Netlify's global CDN ensures fast loading
- **Edge Functions**: Serverless functions at the edge
- **Image Optimization**: Automatic image optimization

### Traffic

- **Bandwidth**: Unlimited bandwidth on all plans
- **Build Minutes**: Varies by plan
- **Concurrent Builds**: Varies by plan

## 🔒 Security

### Built-in Security

- **HTTPS**: Automatic SSL certificates
- **Security Headers**: Configured in `netlify.toml`
- **DDoS Protection**: Included with all plans

### Best Practices

1. **Environment Variables**
   - Never commit secrets to Git
   - Use Netlify's environment variable system

2. **Dependencies**
   - Keep dependencies updated
   - Use `yarn audit` to check for vulnerabilities

3. **Content Security Policy**
   - Consider adding CSP headers
   - Monitor for violations

---

**Your site is now live! 🎉**

Visit your Netlify URL to see your deployed application. 