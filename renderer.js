const func = async () => {
  const response = await window.versions.ping();
  console.log(response); // 'pong' と出力
};

func();
