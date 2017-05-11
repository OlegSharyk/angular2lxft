import { Pipe, PipeTransform } from '@angular/core';


export interface Section {
    _id?: string;
    title: string;
}
@Pipe({
    name: 'sectionFilter'
})

export class SectionFilterPipe implements PipeTransform {
    transform(sections: Section[], v: string):Section[] {
        console.log(sections);
        // console.log(v);
        if (!sections) return [];
        return sections.filter(function(s){
            console.log(s.title);
            if (typeof s.title !== 'string') {
                return false
            } else {
                return  s.title.toLowerCase().startsWith(v.toLowerCase())
            }

        })

    }
}