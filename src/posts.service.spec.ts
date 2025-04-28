import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let service: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
    service = new PostsService();
    service.create({ text: post.text });
  });

  it('should add a new post', () => {
    service.create({ text: post.text });
    expect(service.find('2')?.text).toEqual(post.text);  
  });

  it('should find a post', () => {
    expect(service.find('1')?.text).toEqual(post.text);  
  });
});