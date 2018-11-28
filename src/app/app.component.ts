import { Component, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit
{
    title = 'EGP';

    ngAfterViewInit(): void
    {
        /* SCROLLING NAVBAR */
        const OFFSET_TOP = 50;

        $(window).scroll(function ()
        {
            if ($('.navbar').length)
            {
                if ($('.navbar').offset().top > OFFSET_TOP)
                {
                    $('.scrolling-navbar').addClass('top-nav-collapse');
                } else
                {
                    $('.scrolling-navbar').removeClass('top-nav-collapse');
                }
            }
        });
    }
}
