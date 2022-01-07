# Build command : docker build -t dashy/web .
# Run Command   : docker run -it -p 3000:3000 --name web dashy/web 
# Push Command  : docker push dashy/web 
FROM node

# Set working directory
WORKDIR /app

# Copy Package
COPY package.json ./

# Install Deps
RUN npm install --force       
RUN npm i next
# Copy the app to Workdir
COPY . ./

# Build app
RUN npm run build

# Expose Port to Outside world
EXPOSE 3000

# start app
CMD ["npm", "start"]