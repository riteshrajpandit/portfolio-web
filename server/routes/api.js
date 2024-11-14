// server/routes/api.js
router.post('/auth/login', authController.login);
router.post('/auth/verify', authMiddleware, authController.verify);

// Portfolio routes
router.get('/portfolio', portfolioController.getPortfolioData);
router.put('/portfolio/skills', authMiddleware, portfolioController.updateSkills);
router.put('/portfolio/projects', authMiddleware, portfolioController.updateProjects);
router.put('/portfolio/experience', authMiddleware, portfolioController.updateExperience);
router.post('/portfolio/resume', authMiddleware, uploadMiddleware, portfolioController.updateResume);

// Blog routes
router.get('/blog', blogController.getAllPosts);
router.get('/blog/:id', blogController.getPost);
router.post('/blog', authMiddleware, uploadMiddleware, blogController.createPost);
router.put('/blog/:id', authMiddleware, uploadMiddleware, blogController.updatePost);
router.delete('/blog/:id', authMiddleware, blogController.deletePost);

// Message routes
router.post('/messages', messageController.sendMessage);
router.get('/messages', authMiddleware, messageController.getMessages);
router.put('/messages/:id/read', authMiddleware, messageController.markAsRead);