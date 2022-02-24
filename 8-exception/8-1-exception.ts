// Java: Exception
// JavaScript: Error
// const array = new Array(100000000000);


// Error(Exception) Handling: try -> catch -> finally 

function readFile(fileName: string): string {
    if (fileName === 'not exist!') {
        throw new Error(`file not exist! ${fileName}`);
    }
    return 'file contents';
}

function closeFile(fileName: string) {

}

const fileName = 'file';

// 에러가 발생할 수 있는 코드 (최소한의 코드)
try {
    console.log(readFile(fileName));

// 에러 발생 시 실행할 코드
} catch (error) {
    console.log(`catched!`);

// 에러 발생여부에 상관없이 반드시 실행되어야 하는 코드
} finally {
    closeFile(fileName);
    console.log(`finally!`);
    
}

console.log(`!!!`);
closeFile(fileName);

function run() {
    const fileName = 'not exist!';

    try {
        console.log(readFile(fileName));
    } catch (error) {
        console.log(`catched!`);
        return;
    } finally {
        closeFile(fileName);
        console.log(`closed!`);
    }

}

run();