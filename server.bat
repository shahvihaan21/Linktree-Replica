@echo off
setlocal
set "PORT=8000"

if /I "%~1"=="start" goto start
if /I "%~1"=="stop" goto stop
if /I "%~1"=="status" goto status

echo Usage: server.bat [start^|stop^|status]
exit /b 1

:start
for /f "tokens=5" %%P in ('netstat -ano ^| findstr /r /c:":%PORT% .*LISTENING"') do set "SERVER_PID=%%P"
if defined SERVER_PID (
  echo Site is already running at http://127.0.0.1:%PORT%
  exit /b 0
)
start "Vihaan Link Hub" /min py -3 -m http.server %PORT% --bind 127.0.0.1
echo Site started at http://127.0.0.1:%PORT%
exit /b 0

:stop
for /f "tokens=5" %%P in ('netstat -ano ^| findstr /r /c:":%PORT% .*LISTENING"') do set "SERVER_PID=%%P"
if not defined SERVER_PID (
  echo No site server is running on port %PORT%.
  exit /b 0
)
taskkill /PID %SERVER_PID% /T /F >nul 2>&1
if errorlevel 1 (
  echo Unable to stop the server. Try running Command Prompt as Administrator.
  exit /b 1
)
echo Site server stopped.
exit /b 0

:status
for /f "tokens=5" %%P in ('netstat -ano ^| findstr /r /c:":%PORT% .*LISTENING"') do set "SERVER_PID=%%P"
if defined SERVER_PID (
  echo Site is running at http://127.0.0.1:%PORT% ^(PID %SERVER_PID%^)
) else (
  echo Site server is not running.
)
exit /b 0
