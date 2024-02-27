# Next.js 14 - Ecommerce Admin

Ecommerce Admin application, uses TypeScript (StandardJS), Tailwind + Shadcn/UI, PlanetScale (MySQL), the application only has basic functionalities:

- Authentication using clerk/nextjs v4.29.
- Dashboard with statistics and graphs using recharts v2.12.
- Create banners, categories, sizes, colors.
- Create products and be able to mark them as featured on the home page.
- Attachments are saved to Cloudinary (next-cloudinary v5.20).
- List of orders.
- Option to create multiple stores.
- Integration with Stripe to receive webhooks and be able to update order status.

## Configure environment variables

Rename the file **.env.template** to **.env.local**

- Clerk: Create an account on https://clerk.com, create an application and then go to Api Keys and copy the values of NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY and CLERK_SECRET_KEY

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

- Cloudinary Name: Go to https://cloudinary.com and create a free account, then go to the left side in the Dashboard option and the name assigned by the cloudinay platform will appear there.

```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
```

- PlanetScale: Go to https://planetscale.com and create a free account, then create a database, add a password to the database, select that we will connect with Prisma and copy the connection string.

```
DATABASE_URL='mysql://user:password@hostname?sslaccept=strict'
```

- Stripe: Go to stripe.com and sign up. After logging in, create an account. Then go to the Developers option and in the API Keys section you must copy the public and secret key. In the Webhook section you can test a local environment and then add an endpoint, where you must add the project URL, for example https://domain.com/api/webhooks, select the option to listen for events and select all the events. Then copy the content of the Signed Secret variable into STRIPE_WEBHOOK_SECRET

```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

- Rebuild the node modules and build Next

```
npm install
npm run dev
```
