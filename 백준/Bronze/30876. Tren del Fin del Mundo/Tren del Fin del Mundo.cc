#include <iostream>
using namespace std;

int main(void)
{
    ios_base::sync_with_stdio(false); cin.tie(NULL);
    pair <int, int> ans = { 2e9,2e9 };
    int x, y, N, i;

    cin >> N;
    for (i = 0; i < N; i++)
    {
        cin >> x >> y;
        if (y < ans.second)
            ans = { x,y };
    }
    cout << ans.first << ' ' << ans.second << "\n";
}