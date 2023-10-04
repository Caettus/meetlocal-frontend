# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install Vue CLI globally (if not already installed)
RUN npm install -g @vue/cli

# Install app dependencies
RUN npm install

# Copy all the application files to the container
COPY . .

# Build the Vue.js application
RUN npm run build

# Expose a port for the application (adjust this if needed)
EXPOSE 8080

# Define the command to start your application
CMD ["npm", "run", "serve"]
