// server/models/User.js
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: {
      type: String,
      enum: ['admin'],
      default: 'admin'
    }
  });
  
  // server/models/Portfolio.js
  const portfolioSchema = new mongoose.Schema({
    skills: [{
      name: String,
      level: Number,
      icon: String
    }],
    projects: [{
      title: String,
      description: String,
      images: [String],
      technologies: [String],
      link: String,
      github: String
    }],
    experience: [{
      company: String,
      position: String,
      duration: String,
      description: String,
      logo: String
    }],
    resume: {
      file: String,
      updatedAt: Date
    }
  });
  
  // server/models/Blog.js
  const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    coverImage: String,
    tags: [String],
    createdAt: Date,
    updatedAt: Date
  });
  
  // server/models/Message.js
  const messageSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    createdAt: Date,
    read: Boolean
  });