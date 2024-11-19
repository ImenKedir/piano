# Use the official Bun image as the base
FROM oven/bun:1 AS base

# Set the working directory
WORKDIR /app

# Copy package.json and bun.lockb
COPY package.json bun.lockb ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the Remix application
RUN bun run build

# Expose the port the app will run on
EXPOSE 3000

# Start the application
CMD ["bun", "run", "start"]