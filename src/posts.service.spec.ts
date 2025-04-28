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
    const received = service.find('2');
    expect(received?.text).toEqual(post.text);  
    expect(received?.id).toEqual('2');  
  });

  it('should find a post', () => {
    const received = service.find('1');
    expect(received?.text).toEqual(post.text);  
    expect(received?.id).toEqual('1');  

    expect(service.find('2')).toBeUndefined();  
  });
});